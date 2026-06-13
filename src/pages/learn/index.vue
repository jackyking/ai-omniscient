<template>
  <view class="learn">
    <!-- Hero -->
    <view class="hero-section">
      <view class="hero-badge">📚 AI知识库</view>
      <text class="hero-title">理解<text class="gradient-text">AI核心概念</text></text>
      <text class="hero-desc">从 Agent 到 Skill 再到 MCP，一起探索AI系统的构建方式</text>
    </view>

    <!-- 核心概念 -->
    <view class="section">
      <text class="section-title">🧠 核心概念三角关系</text>
      <view class="concept-list">
        <view class="concept-card" v-for="concept in concepts" :key="concept.id" @click="toggleConcept(concept.id)">
          <view class="concept-icon-row">
            <text class="concept-emoji">{{ concept.emoji }}</text>
            <text class="concept-title">{{ concept.title }}</text>
          </view>
          <text class="concept-desc">{{ concept.description }}</text>
          <view v-if="expandedConcept === concept.id" class="concept-detail">
            <text class="detail-text">{{ concept.detail }}</text>
            <view class="example-box">
              <text class="example-label">💡 简单理解</text>
              <text class="example-text">{{ concept.example }}</text>
            </view>
          </view>
          <text class="expand-btn">{{ expandedConcept === concept.id ? '收起 ▲' : '了解更多 ▼' }}</text>
        </view>
      </view>
    </view>

    <!-- 更多术语 -->
    <view class="section bg-secondary">
      <text class="section-title">📖 更多AI术语</text>
      <view class="glossary-list">
        <view class="glossary-item" v-for="term in glossary" :key="term.id" @click="toggleGlossary(term.id)">
          <view class="glossary-header">
            <text class="glossary-term">{{ term.term }}</text>
            <text class="glossary-chinese">{{ term.chinese }}</text>
          </view>
          <text class="glossary-explain">{{ term.explanation }}</text>
        </view>
      </view>
    </view>

    <!-- 时间线 -->
    <view class="section">
      <text class="section-title">⚡ AI发展时间线</text>
      <view class="timeline">
        <view class="timeline-item" v-for="(event, idx) in timeline" :key="idx">
          <view class="timeline-dot"></view>
          <view class="timeline-content">
            <text class="timeline-year">{{ event.year }}</text>
            <text class="timeline-title">{{ event.title }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 文章列表 -->
    <view class="section bg-secondary">
      <text class="section-title">📝 AI基础文章</text>
      <view class="category-scroll">
        <view
          v-for="cat in categories"
          :key="cat.id"
          :class="['category-tag', activeCategory === cat.id ? 'category-active' : '']"
          @click="activeCategory = cat.id"
        >
          <text :class="activeCategory === cat.id ? 'cat-text-active' : 'cat-text'">{{ cat.name }}</text>
        </view>
      </view>
      <view class="article-list">
        <view class="article-item" v-for="article in filteredArticles" :key="article.id" @click="goDetail('article', article.id)">
          <image :src="article.cover" class="article-img" mode="aspectFill" />
          <view class="article-body">
            <text class="tag">{{ article.category }}</text>
            <text class="article-title">{{ article.title }}</text>
            <text class="article-summary">{{ article.summary }}</text>
            <view class="article-meta">
              <text class="meta-text">📖 {{ article.readTime }}</text>
              <text class="meta-text">👁 {{ article.views }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { articles, categories } from '../../data/articles'
import { glossaryTerms, timelineEvents } from '../../data/courses'

export default {
  data() {
    return {
      expandedConcept: null,
      expandedGlossary: null,
      activeCategory: 'all',
      categories,
      articles,
      glossary: glossaryTerms,
      timeline: timelineEvents,
      concepts: [
        {
          id: 'agent', emoji: '🤖', title: 'Agent（智能体）',
          description: '能够自主感知环境、做出决策并执行任务的智能程序',
          detail: 'Agent是AI的核心概念，它能自主感知环境、推理决策并执行操作。具有自主性、感知能力、推理能力和行动能力四大特点。',
          example: '想象一个私人学习助手，它知道你学了什么，还能预测你接下来需要学什么。'
        },
        {
          id: 'skill', emoji: '✨', title: 'Skill（技能）',
          description: 'AI系统执行特定任务的专业能力或功能模块',
          detail: 'Skill是Agent的能力模块，每个Skill让Agent能执行特定类型的任务。多个Skill可以协同工作，完成复杂任务。',
          example: '就像手机上的一个个App，每个App让你手机能做特定的事。'
        },
        {
          id: 'mcp', emoji: '🔗', title: 'MCP（模型上下文协议）',
          description: '让AI与外部工具和数据源安全交互的通信标准',
          detail: 'MCP是一种开放标准协议，用于连接AI模型与外部数据源和工具。它就像USB接口，让AI能够访问实时数据、使用各种工具。',
          example: 'MCP就像USB接口——有了统一标准，任何USB设备都能插上使用。'
        },
      ]
    }
  },
  computed: {
    filteredArticles() {
      if (this.activeCategory === 'all') return this.articles
      return this.articles.filter(a => a.category === this.activeCategory)
    }
  },
  methods: {
    toggleConcept(id) {
      this.expandedConcept = this.expandedConcept === id ? null : id
    },
    toggleGlossary(id) {
      this.expandedGlossary = this.expandedGlossary === id ? null : id
    },
    goDetail(type, id) {
      uni.navigateTo({ url: `/pages/detail/index?type=${type}&id=${id}` })
    }
  }
}
</script>

<style scoped>
.learn {
  width: 100%;
  min-height: 100vh;
}

.hero-section {
  padding: 60rpx 30rpx 40rpx;
  text-align: center;
  background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(34,211,238,0.1));
  width: 100%;
  box-sizing: border-box;
}
.hero-badge {
  display: inline-block;
  padding: 8rpx 24rpx;
  background: rgba(34,211,238,0.1);
  border-radius: 40rpx;
  font-size: 26rpx;
  color: #22D3EE;
  margin-bottom: 20rpx;
}
.hero-title { font-size: 52rpx; font-weight: 700; color: #FFFFFF; margin-bottom: 16rpx; }
.gradient-text {
  background: linear-gradient(135deg, #6366F1, #22D3EE);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.hero-desc { display: block; font-size: 28rpx; color: #A1A1AA; }

.section { padding: 40rpx 30rpx; width: 100%; box-sizing: border-box; }
.bg-secondary { background-color: rgba(26,26,46,0.5); }

.concept-list { display: flex; flex-direction: column; gap: 20rpx; }
.concept-card {
  background: #1A1A2E;
  border-radius: 24rpx;
  padding: 28rpx;
  border: 1rpx solid rgba(255,255,255,0.05);
}
.concept-icon-row { display: flex; align-items: center; gap: 12rpx; margin-bottom: 12rpx; }
.concept-emoji { font-size: 40rpx; }
.concept-title { font-size: 32rpx; font-weight: 600; color: #FFFFFF; }
.concept-desc { display: block; font-size: 26rpx; color: #A1A1AA; margin-bottom: 16rpx; }
.concept-detail { padding-top: 20rpx; border-top: 1rpx solid rgba(255,255,255,0.05); margin-bottom: 16rpx; }
.detail-text { font-size: 26rpx; color: #A1A1AA; display: block; margin-bottom: 16rpx; }
.example-box { background: #252540; border-radius: 16rpx; padding: 20rpx; }
.example-label { font-size: 22rpx; color: #71717A; display: block; margin-bottom: 8rpx; }
.example-text { font-size: 26rpx; color: #A1A1AA; }
.expand-btn { font-size: 24rpx; color: #22D3EE; }

/* Glossary */
.glossary-list { display: flex; flex-direction: column; gap: 16rpx; }
.glossary-item {
  background: #1A1A2E;
  border-radius: 20rpx;
  padding: 24rpx;
  border: 1rpx solid rgba(255,255,255,0.05);
}
.glossary-header { display: flex; align-items: center; gap: 12rpx; margin-bottom: 8rpx; }
.glossary-term { font-size: 30rpx; font-weight: 600; color: #22D3EE; }
.glossary-chinese { font-size: 24rpx; color: #71717A; }
.glossary-explain { font-size: 26rpx; color: #A1A1AA; }

/* Timeline */
.timeline { padding-left: 30rpx; border-left: 4rpx solid #6366F1; }
.timeline-item { position: relative; padding: 20rpx 0 20rpx 30rpx; }
.timeline-dot {
  position: absolute;
  left: -14rpx; top: 30rpx;
  width: 24rpx; height: 24rpx;
  border-radius: 50%;
  background: #22D3EE;
  border: 4rpx solid #0F0F1A;
}
.timeline-year { font-size: 24rpx; color: #22D3EE; font-weight: 600; display: block; }
.timeline-title { font-size: 28rpx; color: #FFFFFF; }

/* Category & Articles */
.category-scroll {
  display: flex;
  gap: 16rpx;
  margin-bottom: 24rpx;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10rpx;
  width: 100%;
}
.category-tag {
  display: inline-block;
  padding: 10rpx 24rpx;
  background: #252540;
  border-radius: 30rpx;
  flex-shrink: 0;
}
.category-active { background: #6366F1; }
.cat-text { font-size: 24rpx; color: #A1A1AA; }
.cat-text-active { font-size: 24rpx; color: #FFFFFF; }

.article-list { display: flex; flex-direction: column; gap: 20rpx; }
.article-item {
  display: flex;
  background: #1A1A2E;
  border-radius: 20rpx;
  overflow: hidden;
  border: 1rpx solid rgba(255,255,255,0.05);
  width: 100%;
  box-sizing: border-box;
}
.article-img { width: 200rpx; min-width: 200rpx; height: 200rpx; }
.article-body { flex: 1; padding: 16rpx 20rpx; min-width: 0; }
.article-title { display: block; font-size: 28rpx; font-weight: 600; color: #FFFFFF; margin: 8rpx 0; }
.article-summary { display: block; font-size: 24rpx; color: #A1A1AA; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.article-meta { display: flex; gap: 16rpx; margin-top: 10rpx; }
.meta-text { font-size: 22rpx; color: #71717A; }
</style>
