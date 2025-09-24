# 城市分类API服务

一个简单的Node.js API服务，提供城市数据查询功能。

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 启动服务：
```bash
npm start
```

服务将在 http://localhost:1100 启动

## API接口

### 获取所有城市
```
GET /api/cities?cc=your_value
```

**参数：**
- `cc` (必需): 客户端标识参数

**响应示例：**
```json
{
  "success": true,
  "data": [
    {
      "id": "1000000",
      "content": "全部分类"
    },
    {
      "id": "1000001",
      "content": "北京"
    }
  ],
  "cc": "your_value",
  "count": 7
}
```

### 获取指定城市
```
GET /api/cities/:id?cc=your_value
```

**参数：**
- `id` (路径参数): 城市ID
- `cc` (必需): 客户端标识参数

**响应示例：**
```json
{
  "success": true,
  "data": {
    "id": "1000001",
    "content": "北京"
  },
  "cc": "your_value"
}
```

### 健康检查
```
GET /health
```

## 测试示例

```bash
# 获取所有城市
curl "http://localhost:1100/api/cities?cc=test"

# 获取北京信息
curl "http://localhost:1100/api/cities/1000001?cc=test"

# 健康检查
curl "http://localhost:1100/health"