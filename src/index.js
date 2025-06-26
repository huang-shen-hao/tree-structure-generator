import fs from "fs";
import chalk from "chalk";
import { generateTree } from "./treeGenerator.js";

export function run(opts) {
  if (typeof opts.depth !== "number" || isNaN(opts.depth) || opts.depth < 0) {
    console.log(
      chalk.red(
        `❌ Invalid depth: ${opts.depth}. Depth must be a non-negative integer.`
      )
    );
    process.exit(1);
  }

  try {
    const tree = generateTree(opts.path, opts);
    if (opts.output) {
      fs.writeFileSync(opts.output, tree, "utf8");
      console.log(chalk.green(`✅ Tree saved to ${opts.output}`));
    } else {
      console.log(chalk.yellow("📂 Directory Tree:"));
      console.log(tree);
      console.log(chalk.green("✔ Completed"));
    }
  } catch (error) {
    console.error(chalk.red("❌ Error generating tree:"), error.message);
    process.exit(1);
  }
}
