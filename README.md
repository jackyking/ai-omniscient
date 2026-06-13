# AI全知通 🔮

一款 AI 知识导航与学习平台，基于 UniApp 跨端开发，支持 H5 / 微信小程序 / App 多端运行。

## ✨ 功能特性

- **首页** — 精选文章、热门工具、推荐课程一览
- **概念科普** — AI 核心概念深度解读，分类筛选阅读
- **工具导航** — 80+ 优质 AI 工具网格展示，13 大分类快速筛选
- **代码创造营** — AI 编程课程体系，从入门到进阶
- **AI 资讯** — 行业动态实时追踪，热门资讯优先呈现
- **灵感社区** — 创意分享与技术问答，交流碰撞灵感

## 🛠️ 技术栈

- [UniApp](https://uniapp.dcloud.net.cn/) + Vue 3
- TypeScript
- Vite

## 🚀 快速开始

```bash
# 安装依赖
npm install

# H5 开发
npm run dev:h5

# H5 构建
npm run build:h5

# 微信小程序开发
npm run dev:mp-weixin

# 微信小程序构建
npm run build:mp-weixin
```

## 📁 项目结构

```
src/
├── data/              # 数据层（文章、工具、课程、社区）
├── pages/
│   ├── index/         # 首页
│   ├── learn/         # 概念科普
│   ├── tools/         # 工具导航
│   ├── coding/        # 代码创造营
│   ├── news/          # AI 资讯
│   ├── community/     # 灵感社区
│   └── detail/        # 详情页
├── static/            # 静态资源（TabBar 图标等）
├── App.vue            # 应用入口
├── main.ts            # 主入口
├── pages.json         # 页面路由与 TabBar 配置
└── manifest.json      # 应用配置
```

## 📄 License

MIT License
