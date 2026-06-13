// AI全知通 - 工具数据
export const toolCategories = [
  { id: 'all', name: '全部', icon: '⚙️' },
  { id: '智能对话', name: 'AI智能对话', icon: '💬' },
  { id: 'AI搜索', name: 'AI搜索', icon: '🔍' },
  { id: 'AI办公', name: 'AI办公', icon: '💼' },
  { id: 'AI写作', name: 'AI写作', icon: '✍️' },
  { id: 'AI音乐', name: 'AI音乐', icon: '🎵' },
  { id: 'AI视频', name: 'AI视频', icon: '🎬' },
  { id: 'AI绘画', name: 'AI绘画', icon: '🎨' },
  { id: 'AI设计', name: 'AI设计', icon: '📐' },
  { id: 'AI编程', name: 'AI编程', icon: '💻' },
  { id: 'AI数据', name: 'AI数据分析', icon: '📊' },
  { id: 'AI Agent', name: 'AI Agent', icon: '🤖' },
  { id: 'AI数字人', name: 'AI数字人', icon: '👤' },
]

export const tools = [
  // AI智能对话
  { id: 1, name: 'ChatGPT', company: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', category: '智能对话', summary: '全球最流行的AI智能对话助手', rating: 4.9, featured: true, pricing: '免费版 + Plus版($20/月)' },
  { id: 2, name: 'Claude', company: 'Anthropic', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Claude_logo.svg', category: '智能对话', summary: '注重安全性与准确性的AI助手', rating: 4.8, featured: true, pricing: '免费版 + Pro版($20/月)' },
  { id: 3, name: 'DeepSeek', company: '深度求索', logo: 'https://www.deepseek.com/favicon.ico', category: '智能对话', summary: '国产开源大模型，代码与数学能力出色', rating: 4.8, featured: true, pricing: '免费使用' },
  { id: 4, name: '文心一言', company: '百度', logo: 'https://www.baidu.com/favicon.ico', category: '智能对话', summary: '百度大语言模型驱动的AI助手', rating: 4.6, featured: true, pricing: '免费使用' },
  { id: 5, name: '通义千问', company: '阿里巴巴', logo: 'https://www.aliyun.com/favicon.ico', category: '智能对话', summary: '阿里云大语言模型AI助手', rating: 4.7, featured: false, pricing: '免费使用' },
  { id: 6, name: 'Kimi', company: '月之暗面', logo: 'https://kimi.moonshot.cn/favicon.ico', category: '智能对话', summary: '支持超长上下文的AI助手', rating: 4.8, featured: true, pricing: '免费使用' },
  { id: 7, name: '豆包', company: '字节跳动', logo: 'https://www.doubao.com/favicon.ico', category: '智能对话', summary: '字节跳动推出的AI智能助手', rating: 4.5, featured: false, pricing: '免费使用' },
  { id: 8, name: '讯飞星火', company: '科大讯飞', logo: 'https://xinghuo.xfyun.cn/favicon.ico', category: '智能对话', summary: '讯飞认知大模型AI助手', rating: 4.6, featured: false, pricing: '免费使用' },
  { id: 9, name: '智谱清言', company: '智谱AI', logo: 'https://www.zhipuai.cn/favicon.ico', category: '智能对话', summary: '智谱AI大语言模型对话助手', rating: 4.7, featured: true, pricing: '免费使用' },
  { id: 10, name: '腾讯元宝', company: '腾讯', logo: 'https://yuanbao.tencent.com/favicon.ico', category: '智能对话', summary: '腾讯混元大模型AI助手', rating: 4.6, featured: false, pricing: '免费使用' },
  { id: 11, name: 'Gemini', company: 'Google', logo: 'https://www.google.com/favicon.ico', category: '智能对话', summary: 'Google AI大语言模型', rating: 4.7, featured: true, pricing: '免费使用' },
  { id: 12, name: 'Copilot', company: 'Microsoft', logo: 'https://copilot.microsoft.com/favicon.ico', category: '智能对话', summary: '微软AI助手', rating: 4.6, featured: true, pricing: '免费使用' },
  // AI搜索
  { id: 13, name: 'Perplexity', company: 'Perplexity AI', logo: 'https://www.perplexity.ai/favicon.ico', category: 'AI搜索', summary: 'AI驱动的智能搜索引擎', rating: 4.7, featured: true, pricing: '免费版 + Pro版($20/月)' },
  { id: 14, name: '秘塔AI搜索', company: '秘塔科技', logo: 'https://metaso.cn/favicon.ico', category: 'AI搜索', summary: '国内AI搜索产品，无广告直达结果', rating: 4.5, featured: false, pricing: '免费使用' },
  { id: 15, name: '天工AI搜索', company: '昆仑万维', logo: 'https://www.tiangong.cn/favicon.ico', category: 'AI搜索', summary: 'AI增强的智能搜索', rating: 4.5, featured: false, pricing: '免费使用' },
  // AI办公
  { id: 16, name: 'Gamma', company: 'Gamma', logo: 'https://gamma.app/favicon.ico', category: 'AI办公', summary: 'AI驱动的演示文稿制作工具', rating: 4.8, featured: true, pricing: '免费版 + Pro版($12/月)' },
  { id: 17, name: 'WPS AI', company: '金山办公', logo: 'https://www.wps.cn/favicon.ico', category: 'AI办公', summary: 'WPS办公软件AI助手', rating: 4.6, featured: true, pricing: '免费试用 + 会员版' },
  { id: 18, name: '飞书妙记', company: '字节跳动', logo: 'https://www.feishu.cn/favicon.ico', category: 'AI办公', summary: '智能会议纪要工具', rating: 4.6, featured: false, pricing: '免费使用' },
  // AI写作
  { id: 19, name: 'Notion AI', company: 'Notion', logo: 'https://www.notion.so/favicon.ico', category: 'AI写作', summary: '笔记工具AI助手', rating: 4.7, featured: true, pricing: '免费试用 + Plus版($10/月)' },
  { id: 20, name: '秘塔写作猫', company: '秘塔科技', logo: 'https://xiezuocat.com/favicon.ico', category: 'AI写作', summary: '中文AI写作助手', rating: 4.5, featured: true, pricing: '免费版 + 会员版' },
  // AI音乐
  { id: 21, name: 'Suno', company: 'Suno AI', logo: 'https://suno.ai/favicon.ico', category: 'AI音乐', summary: 'AI音乐生成平台', rating: 4.9, featured: true, pricing: '免费版 + Pro版($10/月)' },
  { id: 22, name: '天工SkyMusic', company: '昆仑万维', logo: 'https://www.tiangong.cn/favicon.ico', category: 'AI音乐', summary: '昆仑万维AI音乐生成工具', rating: 4.6, featured: true, pricing: '免费使用' },
  // AI视频
  { id: 23, name: 'Runway', company: 'Runway', logo: 'https://runwayml.com/favicon.ico', category: 'AI视频', summary: 'AI视频编辑与生成平台', rating: 4.8, featured: true, pricing: '免费版 + Pro版($15/月)' },
  { id: 24, name: '可灵AI', company: '快手', logo: 'https://klingai.com/favicon.ico', category: 'AI视频', summary: '快手推出的AI视频生成工具', rating: 4.7, featured: true, pricing: '免费试用 + 付费版' },
  { id: 25, name: '即梦AI', company: '字节跳动', logo: 'https://jimeng.jianying.com/favicon.ico', category: 'AI视频', summary: '字节AI视频生成工具', rating: 4.6, featured: true, pricing: '免费试用 + 积分制' },
  { id: 26, name: '剪映AI', company: '字节跳动', logo: 'https://www.jianying.com/favicon.ico', category: 'AI视频', summary: 'AI增强的视频剪辑工具', rating: 4.6, featured: false, pricing: '免费使用' },
  // AI绘画
  { id: 27, name: 'Midjourney', company: 'Midjourney', logo: 'https://cdn.midjourney.com/favicon.ico', category: 'AI绘画', summary: '高质量AI图像生成工具', rating: 4.9, featured: true, pricing: '订阅版($10-30/月)' },
  { id: 28, name: 'DALL-E', company: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', category: 'AI绘画', summary: 'OpenAI的AI图像生成工具', rating: 4.8, featured: true, pricing: '免费额度 + 付费使用' },
  { id: 29, name: 'Stable Diffusion', company: 'Stability AI', logo: 'https://stability.ai/favicon.ico', category: 'AI绘画', summary: '开源AI图像生成模型', rating: 4.7, featured: true, pricing: '免费使用' },
  // AI设计
  { id: 30, name: 'Canva AI', company: 'Canva', logo: 'https://www.canva.com/favicon.ico', category: 'AI设计', summary: 'AI增强的在线设计平台', rating: 4.7, featured: true, pricing: '免费版 + Pro版' },
  { id: 31, name: 'Figma AI', company: 'Figma', logo: 'https://www.figma.com/favicon.ico', category: 'AI设计', summary: '集成AI的UI设计工具', rating: 4.8, featured: true, pricing: '免费版 + Professional版' },
  // AI编程
  { id: 32, name: 'GitHub Copilot', company: 'GitHub/Microsoft', logo: 'https://github.com/favicon.ico', category: 'AI编程', summary: 'AI编程助手，支持代码补全与生成', rating: 4.8, featured: true, pricing: '$10/月' },
  { id: 33, name: 'Cursor', company: 'Cursor', logo: 'https://cursor.sh/favicon.ico', category: 'AI编程', summary: 'AI原生代码编辑器', rating: 4.9, featured: true, pricing: '免费版 + Pro版($20/月)' },
  { id: 34, name: 'CodeBuddy', company: '腾讯', logo: 'https://cloudstudio.cloud.tencent.com/favicon.ico', category: 'AI编程', summary: '腾讯云CodeBuddy AI编程助手', rating: 4.6, featured: true, pricing: '免费使用' },
  // AI数据
  { id: 35, name: 'ChatExcel', company: 'Chatox', logo: 'https://chatexcel.com/favicon.ico', category: 'AI数据', summary: '自然语言驱动的Excel分析工具', rating: 4.8, featured: true, pricing: '免费使用' },
  { id: 36, name: 'Julius AI', company: 'Julius AI', logo: 'https://julius.ai/favicon.ico', category: 'AI数据', summary: 'AI数据分析与可视化工具', rating: 4.7, featured: true, pricing: '免费试用 + 付费版' },
  // AI Agent
  { id: 37, name: 'Coze', company: '字节跳动', logo: 'https://www.coze.cn/favicon.ico', category: 'AI Agent', summary: 'AI Agent开发平台', rating: 4.6, featured: true, pricing: '免费使用' },
  { id: 38, name: 'Dify', company: 'Dify', logo: 'https://dify.ai/favicon.ico', category: 'AI Agent', summary: '开源AI应用开发平台', rating: 4.7, featured: true, pricing: '开源免费' },
  // AI数字人
  { id: 39, name: '硅基智能', company: '硅基智能', logo: 'https://www.guiji.ai/favicon.ico', category: 'AI数字人', summary: 'AI数字人创作平台', rating: 4.6, featured: true, pricing: '付费使用' },
  { id: 40, name: 'HeyGen', company: 'HeyGen', logo: 'https://heygen.com/favicon.ico', category: 'AI数字人', summary: 'AI视频数字人平台', rating: 4.8, featured: true, pricing: '免费试用 + Pro版($29/月)' },
]
