# TreeStructureGeneration 项目说明书

## 项目简介
TreeStructureGeneration 是一个帮助开发者或普通用户快速生成指定文件夹树状目录结构的小工具。你只需要一个命令，就能清楚看到某个文件夹下的所有文件和子文件夹的层级关系。

## 主要功能
- 一键生成文件夹的树状结构图
- 支持设置递归深度（只看几层）
- 支持忽略不想显示的文件或文件夹（如 node_modules、.git 等）
- 支持将结果保存为 txt 文件
- 彩色输出，界面友好

## 安装方法
1. 你需要先安装 [Node.js](https://nodejs.org/)（建议 14 及以上版本）。
2. 在命令行（CMD 或 PowerShell）进入本项目文件夹，输入：
   ```
   npm install
   ```

## 使用方法
### 1. 直接运行
在命令行输入：
```
npm start
```
默认会扫描当前目录，并输出树状结构。

### 2. 使用命令行工具
安装后可以用 `tree-gen` 命令：
```
npx tree-gen [参数]
```

#### 支持的参数
- `-p, --path <dir>`：指定要扫描的目标文件夹（默认是当前目录）
- `-d, --depth <n>`：递归深度，0 只显示根目录，1 显示一层子目录，依此类推（默认无限制）
- `-i, --ignore <items>`：忽略的文件或文件夹名，用逗号分隔（如 `-i node_modules,.git`）
- `-o, --output <file>`：将结果保存到指定的 txt 文件

#### 示例
1. 扫描当前目录，显示所有层级：
   ```
   npx tree-gen
   ```
2. 只显示两层目录：
   ```
   npx tree-gen -d 2
   ```
3. 忽略 node_modules 和 .git 文件夹：
   ```
   npx tree-gen -i node_modules,.git
   ```
4. 扫描 D 盘的 demo 文件夹，并保存结果到 result.txt：
   ```
   npx tree-gen -p D:/demo -o result.txt
   ```

## 配置说明
你可以通过命令行参数灵活配置扫描的目录、深度和忽略项。

项目内的 `config.js` 也可以设置默认参数（如默认深度、默认忽略项），但一般推荐直接用命令行参数。

## 测试
🔍 Scanning: C:\esign\TreeStructureGeneration
📂 Directory Tree:
├── .gitignore
├── bin
│   └── tree-gen.js
├── config.js
├── package-lock.json
├── package.json
├── README.md
└── src
    ├── index.js
    └── treeGenerator.js

## 常见问题
1. **为什么没有输出？**
   - 请检查你输入的目录路径是否正确，或者目录下是否有文件。
2. **报错"没有权限"怎么办？**
   - 请用管理员权限运行命令行，或选择有权限的文件夹。
3. **如何联系作者？**
   - 作者邮箱：1467788588@qq.com

## 结语
本工具适合所有需要快速查看文件夹结构的用户，无需编程基础。遇到问题欢迎随时反馈！
