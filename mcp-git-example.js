// MCP Git 工具使用示例
const { startMCPGitServer } = require('./mcp-git-config');

// 示例：使用MCP Git工具执行常见Git操作
async function demonstrateGitOperations() {
  console.log('=== MCP Git 工具演示 ===\n');
  
  try {
    // 启动MCP Git服务器
    await startMCPGitServer();
    
    // 这里可以添加具体的Git操作示例
    console.log('\n可用的Git操作包括:');
    console.log('- git status: 查看仓库状态');
    console.log('- git log: 查看提交历史');
    console.log('- git diff: 查看文件差异');
    console.log('- git add: 添加文件到暂存区');
    console.log('- git commit: 提交更改');
    console.log('- git push: 推送到远程仓库');
    console.log('- git pull: 从远程仓库拉取');
    console.log('- git branch: 分支管理');
    console.log('- git checkout: 切换分支或恢复文件');
    
    console.log('\n要使用这些功能，请通过MCP协议与Git服务器交互。');
    
  } catch (error) {
    console.error('演示过程中出现错误:', error);
  }
}

// 运行演示
if (require.main === module) {
  demonstrateGitOperations();
}

module.exports = { demonstrateGitOperations };