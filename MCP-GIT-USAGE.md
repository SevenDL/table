# MCP Git 工具使用指南

## 已安装的工具

✅ **mcp-git** (v0.0.4) - MCP市场中的Git工具已成功安装

## 功能特性

MCP Git工具提供以下功能：

### 基础Git操作
- `git status` - 查看仓库状态
- `git log` - 查看提交历史
- `git diff` - 查看文件差异
- `git add` - 添加文件到暂存区
- `git commit` - 提交更改
- `git push` - 推送到远程仓库
- `git pull` - 从远程仓库拉取更新

### 分支管理
- `git branch` - 分支管理
- `git checkout` - 切换分支或恢复文件
- `git merge` - 合并分支

## 使用方法

### 1. 基础配置
```javascript
const { GitMCPServer } = require('mcp-git');

const gitServer = new GitMCPServer({
  workingDirectory: process.cwd(),
  options: {
    verbose: true,
    allowedOperations: ['status', 'log', 'diff', 'add', 'commit', 'push', 'pull']
  }
});
```

### 2. 启动服务器
```javascript
// 使用提供的配置文件
const { startMCPGitServer } = require('./mcp-git-config');
await startMCPGitServer();
```

### 3. 运行示例
```bash
# 运行配置示例
node mcp-git-config.js

# 运行使用示例
node mcp-git-example.js
```

## 文件说明

- `mcp-git-config.js` - MCP Git服务器配置文件
- `mcp-git-example.js` - 使用示例和演示代码
- `MCP-GIT-USAGE.md` - 本使用指南

## 注意事项

1. **Node.js版本**: 当前使用Node.js v18.15.0，与mcp-git兼容
2. **权限**: 确保对Git仓库有适当的读写权限
3. **网络**: Push/Pull操作需要网络连接和远程仓库访问权限

## 下一步

1. 根据需要修改 `mcp-git-config.js` 中的配置
2. 在您的应用中集成MCP Git功能
3. 通过MCP协议与Git服务器交互

## 故障排除

如果遇到问题：
1. 检查Node.js版本兼容性
2. 确认Git已正确安装在系统中
3. 验证工作目录权限
4. 查看详细错误日志

---

MCP Git工具安装完成！您现在可以在项目中使用Model Context Protocol来管理Git操作。