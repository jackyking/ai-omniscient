// AI全知通 - 文章数据
export const articles = [
  {
    id: 1, title: '什么是人工智能(AI)？', summary: '深入了解人工智能的定义、发展历程与核心概念', category: 'AI基础',
    cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', readTime: '8分钟', difficulty: '入门', views: 12580, likes: 892,
    content: '人工智能（Artificial Intelligence，简称AI）是计算机科学的一个重要分支，旨在创建能够模拟人类智能行为的系统。AI系统能够学习、推理、感知和决策，在许多领域已经达到甚至超越人类水平。',
    keyPoints: ['AI是模拟人类智能的计算机系统', '分为弱AI和强AI两大类', '当前主流是弱AI，专注于特定任务', '深度学习是推动AI发展的核心技术', 'AI正在改变各行各业的运作方式']
  },
  {
    id: 2, title: '机器学习入门指南', summary: '从零开始理解机器学习的核心概念与应用', category: '机器学习',
    cover: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80', readTime: '12分钟', difficulty: '入门', views: 8920, likes: 654,
    content: '机器学习是AI的核心子领域，让计算机能够从数据中自动学习和改进，而无需显式编程。它是现代AI应用的基础技术，广泛应用于推荐系统、图像识别、自然语言处理等领域。',
    keyPoints: ['机器学习分为监督学习、无监督学习和强化学习', '数据是机器学习的"燃料"', '模型训练 = 从数据中找规律', '过拟合和欠拟合是常见问题', '特征工程对模型效果影响巨大']
  },
  {
    id: 3, title: '大语言模型(LLM)解析', summary: '深入了解GPT、BERT等大语言模型的工作原理', category: '大语言模型',
    cover: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', readTime: '15分钟', difficulty: '进阶', views: 15680, likes: 1203,
    content: '大语言模型（Large Language Model，LLM）是基于Transformer架构的大规模神经网络，通过海量文本数据训练而成。它们能够理解和生成人类语言，是ChatGPT等AI助手的核心技术。',
    keyPoints: ['Transformer架构是LLM的基础', '预训练+微调是主流训练范式', '涌现能力是LLM的重要特征', '上下文窗口决定了处理文本的长度', 'RLHF让模型输出更安全有用']
  },
  {
    id: 4, title: '深度学习基础：神经网络入门', summary: '理解神经网络的基本结构与工作原理', category: '深度学习',
    cover: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', readTime: '10分钟', difficulty: '入门', views: 7840, likes: 521,
    content: '神经网络是深度学习的基础架构，灵感来源于人脑的神经元连接方式。通过多层神经元的组合与计算，神经网络能够学习数据中的复杂模式和特征。',
    keyPoints: ['神经网络由输入层、隐藏层和输出层组成', '激活函数赋予网络非线性能力', '反向传播是训练神经网络的核心算法', '深层网络能学习更复杂的特征', 'CNN、RNN、Transformer是常见架构']
  },
  {
    id: 5, title: 'AI伦理与安全问题', summary: '探讨AI发展中的伦理挑战与安全风险', category: 'AI伦理',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', readTime: '11分钟', difficulty: '进阶', views: 5680, likes: 432,
    content: '随着AI技术的快速发展，AI伦理与安全问题日益受到关注。如何确保AI系统的公平性、透明性、可解释性，以及如何防止AI被恶意使用，是当前社会面临的重要挑战。',
    keyPoints: ['AI偏见可能来自训练数据', '深度伪造技术带来信任危机', '隐私保护是AI应用的重要课题', 'AI决策需要可解释性', '全球正在制定AI监管框架']
  },
  {
    id: 6, title: '自然语言处理(NLP)入门', summary: '了解NLP的基本概念与典型应用', category: 'NLP',
    cover: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80', readTime: '9分钟', difficulty: '入门', views: 6890, likes: 478,
    content: '自然语言处理（NLP）是AI的重要分支，致力于让计算机理解、解释和生成人类语言。从搜索引擎到智能助手，NLP技术无处不在。',
    keyPoints: ['NLP让计算机理解人类语言', '分词是中文NLP的基础步骤', '词向量将文字转化为数学表示', 'Transformer革命性地改变了NLP', '大语言模型将NLP推向新高度']
  },
]

export const categories = [
  { id: 'all', name: '全部' },
  { id: 'AI基础', name: 'AI基础' },
  { id: '机器学习', name: '机器学习' },
  { id: '深度学习', name: '深度学习' },
  { id: '大语言模型', name: '大语言模型' },
  { id: 'NLP', name: '自然语言处理' },
  { id: 'AI伦理', name: 'AI伦理' },
]
