# Railway部署步骤

## ✅ 已完成
- GitHub仓库已创建：https://github.com/SevenDL/api.git
- 代码已成功推送到GitHub

## 🚀 Railway部署步骤

### 第1步：访问Railway
1. 打开浏览器，访问：https://railway.app
2. 点击右上角 "Login" 
3. 选择 "Login with GitHub"
4. 授权Railway访问您的GitHub账号

### 第2步：创建新项目
1. 登录后，点击 "New Project"
2. 选择 "Deploy from GitHub repo"
3. 在仓库列表中找到并选择 "SevenDL/api"
4. 点击 "Deploy Now"

### 第3步：等待部署
- Railway会自动检测到这是Node.js项目
- 自动运行 `npm install` 安装依赖
- 自动运行 `npm start` 启动服务
- 整个过程大约需要2-3分钟

### 第4步：获取公网域名
1. 部署完成后，在项目页面找到您的服务
2. 点击服务卡片进入详情页
3. 在 "Settings" 标签页中找到 "Networking" 部分
4. 点击 "Generate Domain" 按钮
5. Railway会生成一个类似 `https://api-production-xxxx.up.railway.app` 的域名

### 第5步：测试API
使用生成的域名测试您的API：

```bash
# 获取所有城市（替换为您的实际域名）
curl "https://your-domain.up.railway.app/api/cities?cc=test"

# 获取单个城市
curl "https://your-domain.up.railway.app/api/cities/1000001?cc=test"

# 健康检查
curl "https://your-domain.up.railway.app/health"
```

## 🎉 部署完成后

您的API将可以通过以下地址访问：
- **所有城市**: `https://your-domain.up.railway.app/api/cities?cc=test`
- **单个城市**: `https://your-domain.up.railway.app/api/cities/1000001?cc=test`
- **健康检查**: `https://your-domain.up.railway.app/health`

## 📝 注意事项

1. **免费额度**: Railway每月提供500小时免费使用时间
2. **自动HTTPS**: Railway自动提供HTTPS支持
3. **自动重启**: 如果服务崩溃，Railway会自动重启
4. **日志查看**: 在Railway控制台可以查看应用日志

## 🔧 如果遇到问题

1. **部署失败**: 检查Railway控制台的构建日志
2. **服务无响应**: 查看应用日志，确认端口配置正确
3. **域名访问失败**: 确认域名已生成且服务正在运行

---

**现在请按照上述步骤在Railway上部署您的API！**