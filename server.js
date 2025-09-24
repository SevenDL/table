const express = require('express');
const app = express();
const PORT = process.env.PORT || 1100;

// 城市数据
const cityData = [
    {
        "id": "1000000",
        "content": "全部分类"
    },
    {
        "id": "1000001",
        "content": "北京"
    },
    {
        "id": "1000002",
        "content": "上海"
    },
    {
        "id": "1000003",
        "content": "天津"
    },
    {
        "id": "1000004",
        "content": "重庆"
    },
    {
        "id": "1000005",
        "content": "郑州"
    },
    {
        "id": "1000006",
        "content": "南昌"
    }
];

// 中间件
app.use(express.json());

// API接口 - 获取所有城市数据
app.get('/api/cities', (req, res) => {
    const { cc } = req.query;
    
    if (!cc) {
        return res.status(400).json({
            success: false,
            message: '缺少必需参数cc'
        });
    }
    
    res.json({
        success: true,
        data: cityData,
        cc: cc,
        count: cityData.length
    });
});

// API接口 - 根据ID获取单个城市
app.get('/api/cities/:id', (req, res) => {
    const { cc } = req.query;
    const { id } = req.params;
    
    if (!cc) {
        return res.status(400).json({
            success: false,
            message: '缺少必需参数cc'
        });
    }
    
    const city = cityData.find(item => item.id === id);
    
    if (!city) {
        return res.status(404).json({
            success: false,
            message: '未找到指定城市',
            cc: cc
        });
    }
    
    res.json({
        success: true,
        data: city,
        cc: cc
    });
});

// 健康检查接口
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        port: PORT
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 城市API服务已启动`);
    console.log(`📍 服务地址: http://localhost:${PORT}`);
    console.log(`📋 API接口:`);
    console.log(`   GET /api/cities?cc=your_value - 获取所有城市`);
    console.log(`   GET /api/cities/:id?cc=your_value - 获取指定城市`);
    console.log(`   GET /health - 健康检查`);
});