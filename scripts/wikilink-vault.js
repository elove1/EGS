#!/usr/bin/env node
// Converts a folder of Markdown/text docs into an Obsidian-style vault by
// auto-inserting [[wikilinks]] wherever one doc's title appears in another.
//
// Usage: node scripts/wikilink-vault.js <inputDir> <outputDir>

const fs = require('fs');
const path = require('path');

const SKIP_REGEX = /```[\s\S]*?```|`[^`\n]+`|\[\[[^\]]+\]\]|\[[^\]]*\]\([^)]*\)/g;
const MIN_TITLE_LENGTH = 3;

function walk(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    results = entry.isDirectory() ? results.concat(walk(full)) : results.concat(full);
  }
  return results;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function titleFromFile(relPath, content) {
  const h1 = content.match(/^#\s+(.+)$/m);
  if (h1) return h1[1].trim();
  return path.basename(relPath, path.extname(relPath)).replace(/[-_]+/g, ' ').trim();
}

function getSkipZones(content) {
  const zones = [];
  let m;
  SKIP_REGEX.lastIndex = 0;
  while ((m = SKIP_REGEX.exec(content)) !== null) {
    zones.push([m.index, m.index + m[0].length]);
  }
  return zones;
}

function overlapsZone(start, end, zones) {
  return zones.some(([s, e]) => start < e && end > s);
}

function findAllMatches(content, titles, selfTitle, zones) {
  const matches = [];
  for (const t of titles) {
    if (t.title.toLowerCase() === selfTitle.toLowerCase()) continue;
    const re = new RegExp(`(?<![A-Za-z0-9_])${escapeRegExp(t.title)}(?![A-Za-z0-9_])`, 'gi');
    let m;
    while ((m = re.exec(content)) !== null) {
      const start = m.index;
      const end = start + m[0].length;
      if (!overlapsZone(start, end, zones)) {
        matches.push({ start, end, title: t.title, text: m[0] });
      }
    }
  }
  return matches;
}

// Picks non-overlapping matches, earliest and longest first, one per title.
function selectMatches(matches) {
  matches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  const selected = [];
  const usedTitles = new Set();
  let lastEnd = -1;
  for (const m of matches) {
    if (usedTitles.has(m.title) || m.start < lastEnd) continue;
    selected.push(m);
    usedTitles.add(m.title);
    lastEnd = m.end;
  }
  return selected;
}

function applyMatches(content, selected) {
  let result = '';
  let pos = 0;
  for (const m of selected) {
    result += content.slice(pos, m.start);
    result += m.text === m.title ? `[[${m.title}]]` : `[[${m.title}|${m.text}]]`;
    pos = m.end;
  }
  result += content.slice(pos);
  return result;
}

function main() {
  const [, , inputDir, outputDir] = process.argv;
  if (!inputDir || !outputDir) {
    console.error('Usage: node scripts/wikilink-vault.js <inputDir> <outputDir>');
    process.exit(1);
  }
  if (!fs.existsSync(inputDir)) {
    console.error(`Input directory not found: ${inputDir}`);
    process.exit(1);
  }

  const allFiles = walk(inputDir);
  const docFiles = allFiles.filter((f) => /\.(md|txt)$/i.test(f));

  const docs = docFiles.map((f) => {
    const relPath = path.relative(inputDir, f);
    const content = fs.readFileSync(f, 'utf8');
    return { relPath, content, title: titleFromFile(relPath, content) };
  });

  const titles = docs
    .map((d) => ({ title: d.title }))
    .filter((t) => t.title.length >= MIN_TITLE_LENGTH);

  let totalLinks = 0;
  for (const doc of docs) {
    const zones = getSkipZones(doc.content);
    const matches = findAllMatches(doc.content, titles, doc.title, zones);
    const selected = selectMatches(matches);
    const linked = applyMatches(doc.content, selected);
    totalLinks += selected.length;

    const outPath = path.join(outputDir, doc.relPath);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, linked, 'utf8');
  }

  for (const f of allFiles) {
    if (/\.(md|txt)$/i.test(f)) continue;
    const rel = path.relative(inputDir, f);
    const outPath = path.join(outputDir, rel);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.copyFileSync(f, outPath);
  }

  console.log(`Processed ${docs.length} docs, inserted ${totalLinks} wikilinks.`);
  console.log(`Vault written to ${outputDir}`);
}

main();
