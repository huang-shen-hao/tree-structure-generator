#!/usr/bin/env node
import { Command } from 'commander';
import figlet from 'figlet';
import chalk from 'chalk';
import { run } from '../src/index.js';

// ASCII Art Header
console.log(
  chalk.blue(
    figlet.textSync('Tree Generation', {
      font: 'Standard',
      horizontalLayout: 'full',
      verticalLayout: 'full',
    })
  )
);

const program = new Command();
program
  .name('tree-gen')
  .description(chalk.blue('Generate directory tree structure with colors'))
  .version('1.0.0')
  .option('-p, --path <dir>', 'Target directory', process.cwd())
  .option('-d, --depth <n>', 'Recursion depth (0 = only root)', (val) => parseInt(val, 10), Infinity)
  .option('-i, --ignore <items>', 'Comma-separated names to ignore', (val) => val.split(','), ['node_modules', '.git'])
  .option('-o, --output <file>', 'Output txt file path')
  .parse(process.argv);

const options = program.opts();
console.log(chalk.green(`🔍 Scanning: ${options.path}`));
run(options);
