// MCP Git 工具配置示例
const { GitMCPServer } = require('mcp-git');

// 创建 MCP Git 服务器实例
const gitServer = new GitMCPServer({
  // 工作目录 - 当前项目目录
  workingDirectory: process.cwd(),
  
  // 可选配置
  options: {
    // 启用详细日志
    verbose: true,
    
    // 允许的Git操作
    allowedOperations: [
      'status',
      'log',
      'diff',
      'add',
      'commit',
      'push',
      'pull',
      'branch',
      'checkout'
    ]
  }
});

// 启动服务器
async function startMCPGitServer() {
  try {
    await gitServer.start();
    console.log('MCP Git 服务器已启动');
    console.log('可用的Git操作:', gitServer.getAvailableOperations());
  } catch (error) {
    console.error('启动MCP Git服务器失败:', error);
  }
}

// 导出配置
module.exports = {
  gitServer,
  startMCPGitServer
};

// 如果直接运行此文件，则启动服务器
if (require.main === module) {
  startMCPGitServer();
}