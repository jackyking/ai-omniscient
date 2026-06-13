<template>
  <view class="home">
    <!-- Hero -->
    <view class="hero-section">
      <view class="hero-bg"></view>
      <view class="hero-content">
        <view class="hero-badge">
          <text class="badge-icon">⚡</text>
          <text class="badge-text">零基础也能成为AI专家</text>
        </view>
        <view class="hero-title">
          <text class="title-main">AI全知通</text>
          <text class="title-gradient"> 让AI触手可及</text>
        </view>
        <text class="hero-desc">面向零基础用户的AI知识科普、工具导航、代码教学与灵感社区</text>
        <view class="hero-actions">
          <view class="btn-primary" @click="goPage('/pages/learn/index')">
            <text class="btn-text-white">开始学习</text>
          </view>
          <view class="btn-secondary" @click="goPage('/pages/tools/index')">
            <text class="btn-text-primary">探索工具</text>
          </view>
        </view>
      </view>

      <!-- Stats -->
      <view class="stats-row">
        <view class="stat-item" v-for="stat in stats" :key="stat.label">
          <text class="stat-value">{{ stat.value }}</text>
          <text class="stat-label">{{ stat.label }}</text>
        </view>
      </view>
    </view>

    <!-- 模块入口 -->
    <view class="section">
      <text class="section-title">探索五大模块</text>
      <text class="section-subtitle">找到属于你的AI学习路径</text>
      <view class="modules-grid">
        <view class="module-card" v-for="mod in modules" :key="mod.title" @click="goPage(mod.path)">
          <view class="module-icon" :style="{ background: mod.gradient }">
            <text class="icon-emoji">{{ mod.icon }}</text>
          </view>
          <text class="module-title">{{ mod.title }}</text>
          <text class="module-desc">{{ mod.description }}</text>
          <text class="module-link">探索 →</text>
        </view>
      </view>
    </view>

    <!-- 热门文章 -->
    <view class="section bg-secondary">
      <view class="section-header">
        <view>
          <text class="section-title">热门文章</text>
          <text class="section-subtitle">了解AI的基础知识</text>
        </view>
        <text class="link-text" @click="goPage('/pages/learn/index')">查看全部 →</text>
      </view>
      <scroll-view scroll-x class="scroll-row">
        <view class="article-card" v-for="article in featuredArticles" :key="article.id" @click="goDetail('article', article.id)">
          <image :src="article.cover" class="article-cover" mode="aspectFill" />
          <view class="article-info">
            <text class="tag">{{ article.category }}</text>
            <text class="article-title">{{ article.title }}</text>
            <text class="article-summary">{{ article.summary }}</text>
            <view class="article-meta">
              <text class="meta-text">📖 {{ article.readTime }}</text>
              <text class="meta-text">👁 {{ formatNum(article.views) }}</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 精选工具 -->
    <view class="section">
      <view class="section-header">
        <view>
          <text class="section-title">精选工具</text>
          <text class="section-subtitle">发现最实用的AI工具</text>
        </view>
        <text class="link-text" @click="goPage('/pages/tools/index')">查看全部 →</text>
      </view>
      <view class="tools-grid">
        <view class="tool-card" v-for="tool in featuredTools" :key="tool.id" @click="goDetail('tool', tool.id)">
          <image :src="tool.logo" class="tool-logo" mode="aspectFit" />
          <text class="tool-name">{{ tool.name }}</text>
          <text class="tool-company">{{ tool.company }}</text>
          <text class="tool-summary">{{ tool.summary }}</text>
          <view class="tool-rating">
            <text class="rating-star" v-for="s in 5" :key="s">{{ s <= Math.floor(tool.rating) ? '⭐' : '☆' }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 代码创造营 -->
    <view class="section bg-secondary">
      <view class="section-header">
        <view>
          <text class="section-title">代码创造营</text>
          <text class="section-subtitle">从零开始构建真实项目</text>
        </view>
        <text class="link-text" @click="goPage('/pages/coding/index')">查看全部 →</text>
      </view>
      <view class="courses-list">
        <view class="course-card" v-for="course in courses" :key="course.id" @click="goDetail('course', course.id)">
          <image :src="course.cover" class="course-cover" mode="aspectFill" />
          <view class="course-info">
            <view class="course-level-row">
              <text :class="course.level === '入门' ? 'level-beginner' : 'level-advanced'">{{ course.level }}</text>
              <text class="course-hours">{{ course.totalHours }}小时</text>
            </view>
            <text class="course-title">{{ course.title }}</text>
            <text class="course-desc">{{ course.description }}</text>
            <text class="course-lessons">{{ course.lessons.length }} 节课程 · 开始学习 →</text>
          </view>
        </view>
      </view>
    </view>

    <!-- CTA -->
    <view class="section">
      <view class="cta-card">
        <text class="cta-title">准备好开始你的AI全知之旅了吗？</text>
        <text class="cta-desc">加入我们，与10万+学习者一起探索AI的无限可能</text>
        <view class="btn-primary" @click="goPage('/pages/learn/index')">
          <text class="btn-text-white">立即开始</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { articles, categories } from '../../data/articles'
import { tools, toolCategories } from '../../data/tools'
import { courses } from '../../data/courses'

export default {
  data() {
    return {
      featuredArticles: articles.slice(0, 3),
      featuredTools: tools.filter(t => t.featured).slice(0, 4),
      courses: courses,
      stats: [
        { label: '精选文章', value: '100+' },
        { label: 'AI工具', value: '80+' },
        { label: '在线课程', value: '10+' },
        { label: '学习用户', value: '10万+' },
      ],
      modules: [
        { icon: '🧠', title: '概念科普', description: 'AI基础知识通俗易懂讲解', path: '/pages/learn/index', gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)' },
        { icon: '🧭', title: '工具导航', description: '13大分类AI工具一网打尽', path: '/pages/tools/index', gradient: 'linear-gradient(135deg, #22D3EE, #6366F1)' },
        { icon: '💻', title: '代码创造营', description: 'Vibe Coding零基础实战', path: '/pages/coding/index', gradient: 'linear-gradient(135deg, #8B5CF6, #22D3EE)' },
        { icon: '📰', title: 'AI资讯', description: '行业动态与前沿趋势', path: '/pages/news/index', gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)' },
        { icon: '💡', title: '灵感社区', description: '分享创意、交流心得', path: '/pages/community/index', gradient: 'linear-gradient(135deg, #10B981, #22D3EE)' },
      ],
    }
  },
  methods: {
    goPage(url) {
      const tabBarPages = ['/pages/index/index', '/pages/learn/index', '/pages/tools/index', '/pages/coding/index', '/pages/community/index']
      if (tabBarPages.includes(url)) {
        uni.switchTab({ url })
      } else {
        uni.navigateTo({ url })
      }
    },
    goDetail(type, id) {
      uni.navigateTo({ url: `/pages/detail/index?type=${type}&id=${id}` })
    },
    formatNum(n) {
      if (n >= 10000) return (n / 10000).toFixed(1) + '万'
      if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
      return n
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
}

.hero-section {
  position: relative;
  padding: 80rpx 30rpx 40rpx;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}
.hero-bg {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(34,211,238,0.1));
}
.hero-content {
  position: relative;
  text-align: center;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8rpx;
  padding: 10rpx 24rpx;
  background: rgba(99,102,241,0.1);
  border-radius: 40rpx;
  margin-bottom: 30rpx;
}
.badge-icon { font-size: 28rpx; }
.badge-text { font-size: 24rpx; color: #6366F1; font-weight: 500; }
.hero-title { margin-bottom: 24rpx; }
.title-main { font-size: 72rpx; font-weight: 700; color: #FFFFFF; }
.title-gradient {
  font-size: 72rpx; font-weight: 700;
  background: linear-gradient(135deg, #6366F1, #22D3EE);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.hero-desc {
  display: block;
  font-size: 28rpx; color: #A1A1AA;
  margin-bottom: 40rpx;
}
.hero-actions {
  display: flex; gap: 20rpx;
  justify-content: center;
}
.btn-text-white { color: #FFFFFF; font-size: 30rpx; font-weight: 600; }
.btn-text-primary { color: #6366F1; font-size: 30rpx; font-weight: 600; }

.stats-row {
  position: relative;
  display: flex;
  margin-top: 50rpx;
  gap: 16rpx;
}
.stat-item {
  flex: 1;
  background: #1A1A2E;
  border-radius: 20rpx;
  padding: 24rpx 16rpx;
  text-align: center;
  border: 1rpx solid rgba(255,255,255,0.05);
}
.stat-value {
  display: block;
  font-size: 36rpx; font-weight: 700;
  background: linear-gradient(135deg, #6366F1, #22D3EE);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  margin-bottom: 4rpx;
}
.stat-label { font-size: 22rpx; color: #A1A1AA; }

/* Sections */
.section { padding: 50rpx 30rpx; width: 100%; box-sizing: border-box; }
.bg-secondary { background-color: rgba(26,26,46,0.5); }
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30rpx;
}
.link-text { color: #6366F1; font-size: 26rpx; font-weight: 500; }

/* Module Cards - 5 columns */
.modules-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
}
.module-card {
  width: calc(20% - 13rpx);
  min-width: 160rpx;
  background: #1A1A2E;
  border-radius: 24rpx;
  padding: 24rpx 16rpx;
  border: 1rpx solid rgba(255,255,255,0.05);
  text-align: center;
}
.module-icon {
  width: 72rpx; height: 72rpx;
  border-radius: 20rpx;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 12rpx;
}
.icon-emoji { font-size: 36rpx; }
.module-title { display: block; font-size: 26rpx; font-weight: 600; color: #FFFFFF; margin-bottom: 6rpx; }
.module-desc { display: block; font-size: 20rpx; color: #A1A1AA; margin-bottom: 10rpx; white-space: normal; }
.module-link { font-size: 22rpx; color: #6366F1; font-weight: 500; }

/* Article Cards */
.scroll-row { white-space: nowrap; width: 100%; }
.article-card {
  display: inline-block;
  width: 520rpx;
  background: #1A1A2E;
  border-radius: 24rpx;
  overflow: hidden;
  margin-right: 20rpx;
  vertical-align: top;
  border: 1rpx solid rgba(255,255,255,0.05);
}
.article-cover { width: 520rpx; height: 280rpx; }
.article-info { padding: 20rpx; white-space: normal; }
.article-title { display: block; font-size: 28rpx; font-weight: 600; color: #FFFFFF; margin: 10rpx 0; }
.article-summary { display: block; font-size: 24rpx; color: #A1A1AA; margin-bottom: 16rpx; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.article-meta { display: flex; gap: 20rpx; }
.meta-text { font-size: 22rpx; color: #71717A; }

/* Tool Cards */
.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
}
.tool-card {
  width: calc(50% - 10rpx);
  background: #1A1A2E;
  border-radius: 24rpx;
  padding: 24rpx;
  border: 1rpx solid rgba(255,255,255,0.05);
  box-sizing: border-box;
}
.tool-logo { width: 64rpx; height: 64rpx; border-radius: 16rpx; background: #252540; margin-bottom: 12rpx; }
.tool-name { display: block; font-size: 28rpx; font-weight: 600; color: #FFFFFF; }
.tool-company { display: block; font-size: 22rpx; color: #71717A; margin-bottom: 8rpx; }
.tool-summary { display: block; font-size: 24rpx; color: #A1A1AA; margin-bottom: 12rpx; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.tool-rating { display: flex; gap: 4rpx; }
.rating-star { font-size: 20rpx; }

/* Course Cards */
.courses-list { display: flex; flex-direction: column; gap: 24rpx; }
.course-card {
  display: flex;
  background: #1A1A2E;
  border-radius: 24rpx;
  overflow: hidden;
  border: 1rpx solid rgba(255,255,255,0.05);
  width: 100%;
  box-sizing: border-box;
}
.course-cover { width: 280rpx; min-width: 280rpx; height: 240rpx; }
.course-info { flex: 1; padding: 20rpx; min-width: 0; }
.course-level-row { display: flex; align-items: center; gap: 12rpx; margin-bottom: 10rpx; }
.level-beginner { font-size: 22rpx; color: #4ADE80; background: rgba(74,222,128,0.1); padding: 4rpx 14rpx; border-radius: 16rpx; }
.level-advanced { font-size: 22rpx; color: #FB923C; background: rgba(251,146,60,0.1); padding: 4rpx 14rpx; border-radius: 16rpx; }
.course-hours { font-size: 22rpx; color: #A1A1AA; background: rgba(0,0,0,0.3); padding: 4rpx 14rpx; border-radius: 16rpx; }
.course-title { display: block; font-size: 28rpx; font-weight: 600; color: #FFFFFF; margin-bottom: 8rpx; }
.course-desc { display: block; font-size: 24rpx; color: #A1A1AA; margin-bottom: 16rpx; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.course-lessons { font-size: 24rpx; color: #6366F1; font-weight: 500; }

/* CTA */
.cta-card {
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  border-radius: 32rpx;
  padding: 60rpx 40rpx;
  text-align: center;
}
.cta-title { display: block; font-size: 40rpx; font-weight: 700; color: #FFFFFF; margin-bottom: 16rpx; }
.cta-desc { display: block; font-size: 28rpx; color: rgba(255,255,255,0.8); margin-bottom: 40rpx; }
</style>
