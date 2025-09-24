# 部署说明

## 方式一：GitHub Pages（推荐，免费）

### 步骤1：创建GitHub仓库
1. 访问 https://github.com 并登录
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称：`production-data-table`
4. 设置为 Public（公开）
5. 点击 "Create repository"

### 步骤2：上传代码
在当前目录执行以下命令：

```bash
git remote add origin https://github.com/你的用户名/production-data-table.git
git branch -M main
git push -u origin main
```

### 步骤3：启用GitHub Pages
1. 在GitHub仓库页面，点击 "Settings"
2. 滚动到 "Pages" 部分
3. 在 "Source" 下选择 "Deploy from a branch"
4. 选择 "main" 分支和 "/ (root)" 文件夹
5. 点击 "Save"

几分钟后，您的网站将在以下地址可访问：
`https://你的用户名.github.io/production-data-table/`

## 方式二：Netlify（免费，更简单）

### 步骤1：访问Netlify
1. 访问 https://netlify.com
2. 注册或登录账户

### 步骤2：部署
1. 点击 "Add new site" > "Deploy manually"
2. 将当前文件夹拖拽到部署区域
3. 等待部署完成

Netlify会自动生成一个随机域名，您也可以自定义域名。

## 方式三：Vercel（免费）

### 步骤1：访问Vercel
1. 访问 https://vercel.com
2. 使用GitHub账户登录

### 步骤2：部署
1. 点击 "New Project"
2. 选择您的GitHub仓库
3. 点击 "Deploy"

## 方式四：Surge.sh（命令行部署）

### 步骤1：安装Surge
```bash
npm install -g surge
```

### 步骤2：部署
```bash
surge
```

按提示输入域名和确认部署。

## 推荐使用GitHub Pages
- 完全免费
- 稳定可靠
- 支持自定义域名
- 与Git版本控制集成
- 自动部署更新

部署完成后，您将获得一个公网可访问的URL，可以分享给任何人使用。