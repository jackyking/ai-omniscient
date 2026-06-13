// AI全知通 - 课程数据
export const courses = [
  {
    id: 'basic',
    title: '基础篇：AI编程入门',
    description: '从零开始学习编程，借助AI工具实现你的第一个项目',
    cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    level: '入门',
    totalHours: 5,
    lessons: [
      { id: 'basic-1', title: '第1课：环境搭建与工具准备', duration: '30分钟', difficulty: 1 },
      { id: 'basic-2', title: '第2课：HTML/CSS前端入门', duration: '60分钟', difficulty: 1 },
      { id: 'basic-3', title: '第3课：JavaScript基础', duration: '60分钟', difficulty: 2 },
      { id: 'basic-4', title: '第4课：AI辅助编程工具使用', duration: '30分钟', difficulty: 1 },
      { id: 'basic-5', title: '第5课：第一个网页项目实战', duration: '90分钟', difficulty: 2 },
      { id: 'basic-6', title: '第6课：项目发布到互联网', duration: '30分钟', difficulty: 1 },
    ]
  },
  {
    id: 'advanced',
    title: '进阶篇：完整项目实战',
    description: '通过真实项目学习全栈开发，打造完整的购物平台',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    level: '进阶',
    totalHours: 30,
    lessons: [
      { id: 'advanced-1', title: '项目A：购物网站全栈开发', duration: '20-30小时', difficulty: 3 },
      { id: 'advanced-2', title: '项目B：购物Android App开发', duration: '20-30小时', difficulty: 3 },
      { id: 'advanced-3', title: '项目C：购物iOS App开发', duration: '20-30小时', difficulty: 3 },
      { id: 'advanced-4', title: '项目D：购物微信小程序开发', duration: '20-30小时', difficulty: 3 },
    ]
  }
]

// AI术语表
export const glossaryTerms = [
  { id: 1, term: 'AI', chinese: '人工智能', explanation: '使计算机具有人类智能的技术，能够感知、学习、推理和决策。' },
  { id: 2, term: 'ML', chinese: '机器学习', explanation: '让计算机从数据中自动学习并改进的算法。' },
  { id: 3, term: 'DL', chinese: '深度学习', explanation: '使用多层神经网络进行学习的方法。' },
  { id: 4, term: 'LLM', chinese: '大语言模型', explanation: '基于大规模文本数据训练的语言模型，能够理解和生成人类语言。' },
  { id: 5, term: 'NLP', chinese: '自然语言处理', explanation: '让计算机理解、解释和生成人类语言的技术。' },
  { id: 6, term: 'CV', chinese: '计算机视觉', explanation: '让计算机能够"看懂"图像和视频的技术。' },
  { id: 7, term: 'Agent', chinese: '智能体', explanation: '能够自主感知环境、做出决策并执行任务的智能程序。' },
  { id: 8, term: 'Prompt', chinese: '提示工程', explanation: '设计和优化输入提示词，以获得更好AI输出结果的技术。' },
  { id: 9, term: 'MCP', chinese: '模型上下文协议', explanation: '让AI与外部工具和数据源安全交互的通信标准。' },
  { id: 10, term: 'RAG', chinese: '检索增强生成', explanation: '让AI基于特定知识库回答问题的技术。' },
]

// AI发展时间线
export const timelineEvents = [
  { year: 1950, title: '图灵测试提出' },
  { year: 1956, title: '达特茅斯会议' },
  { year: 1997, title: '深蓝击败卡斯帕罗夫' },
  { year: 2016, title: 'AlphaGo战胜李世石' },
  { year: 2022, title: 'ChatGPT发布' },
  { year: 2023, title: 'GPT-4发布' },
  { year: 2024, title: 'MCP协议发布' },
  { year: 2025, title: 'AI Agent兴起' },
  { year: 2026, title: 'Vibe Coding普及' },
]
