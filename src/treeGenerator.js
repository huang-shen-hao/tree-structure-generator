import fs from 'fs';
import path from 'path';

export function generateTree(dir, opts, prefix = '') {
  if (opts.depth < 0) return '';

  let result = '';
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => !opts.ignore.includes(e.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  entries.forEach((entry, idx) => {
    const isLast = idx === entries.length - 1;
    const pointer = isLast ? '└── ' : '├── ';
    result += `${prefix}${pointer}${entry.name}\n`;

    if (entry.isDirectory()) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      result += generateTree(
        path.join(dir, entry.name),
        { ...opts, depth: opts.depth - 1 },
        newPrefix
      );
    }
  });

  return result;
}