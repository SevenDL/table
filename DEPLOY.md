# 免费部署指南

## 方案一：Railway部署（推荐）

### 步骤1：准备GitHub仓库
1. 在GitHub上创建新仓库（如：city-api）
2. 将代码推送到GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/city-api.git
git push -u origin main
```

### 步骤2：Railway部署
1. 访问 https://railway.app
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择 "Deploy from GitHub repo"
5. 选择您的 city-api 仓库
6. Railway会自动检测Node.js项目并开始部署
7. 部署完成后，点击 "Generate Domain" 获取公网访问地址

### 预期结果
- 获得类似：`https://your-app-name.up.railway.app` 的域名
- API接口地址：`https://your-app-name.up.railway.app/api/cities?cc=test`

---

## 方案二：Render部署

### 步骤1：同样需要GitHub仓库（参考上面）

### 步骤2：Render部署
1. 访问 https://render.com
2. 使用GitHub账号登录
3. 点击 "New +" → "Web Service"
4. 连接您的GitHub仓库
5. 配置：
   - Name: city-api
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
6. 点击 "Create Web Service"

### 预期结果
- 获得类似：`https://city-api.onrender.com` 的域名

---

## 方案三：Vercel部署

### 步骤1：同样需要GitHub仓库

### 步骤2：Vercel部署
1. 访问 https://vercel.com
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 导入您的GitHub仓库
5. Vercel会自动部署

### 预期结果
- 获得类似：`https://city-api.vercel.app` 的域名

---

## 快速测试部署结果

部署完成后，使用以下命令测试：

```bash
# 替换为您的实际域名
curl "https://your-domain.com/api/cities?cc=test"
curl "https://your-domain.com/health"
```

## 注意事项

1. **免费限制**：
   - Railway: 每月500小时免费使用
   - Render: 免费版会在无活动时休眠
   - Vercel: 主要适合静态网站，但也支持API

2. **推荐Railway**，因为：
   - 部署简单
   - 支持持续运行
   - 自动HTTPS
   - 免费额度充足

3. **域名格式**：
   - 所有平台都提供免费的子域名
   - 支持HTTPS（自动配置）

选择其中一个平台按步骤操作即可！