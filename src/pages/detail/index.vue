<template>
  <view class="detail-page">
    <!-- 文章详情 -->
    <view v-if="type === 'article'" class="detail-content">
      <image :src="item.cover" class="detail-cover" mode="aspectFill" />
      <view class="detail-body">
        <text class="detail-tag">{{ item.category }}</text>
        <text class="detail-title">{{ item.title }}</text>
        <view class="detail-meta">
          <text class="meta-item">📖 {{ item.readTime }}</text>
          <text class="meta-item">👁 {{ item.views }} 阅读</text>
        </view>
        <view class="detail-divider"></view>
        <text class="detail-text">{{ item.content || item.summary }}</text>
        <view v-if="item.keyPoints && item.keyPoints.length" class="key-points">
          <text class="key-title">🔑 核心要点</text>
          <view class="key-item" v-for="(point, idx) in item.keyPoints" :key="idx">
            <text class="key-dot">•</text>
            <text class="key-text">{{ point }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 工具详情 -->
    <view v-if="type === 'tool'" class="detail-content">
      <view class="tool-detail-header">
        <image :src="item.logo" class="tool-detail-logo" mode="aspectFit" />
        <view class="tool-detail-info">
          <text class="detail-title">{{ item.name }}</text>
          <text class="detail-company">{{ item.company }}</text>
        </view>
      </view>
      <view class="detail-body">
        <view class="tool-detail-meta">
          <view class="tool-detail-rating">
            <text class="rating-star" v-for="s in 5" :key="s">{{ s <= Math.floor(item.rating || 0) ? '⭐' : '☆' }}</text>
            <text class="rating-num">{{ item.rating }}</text>
          </view>
          <text class="tool-detail-pricing">{{ item.pricing }}</text>
        </view>
        <view v-if="item.featured" class="tool-badge-row">
          <text class="badge-recommend">👍 编辑推荐</text>
        </view>
        <view class="detail-divider"></view>
        <text class="detail-text">{{ item.summary }}</text>
        <view class="detail-divider"></view>
        <text class="section-label">所属分类</text>
        <text class="category-badge">{{ item.category }}</text>
      </view>
    </view>

    <!-- 课程详情 -->
    <view v-if="type === 'course'" class="detail-content">
      <image :src="item.cover" class="detail-cover" mode="aspectFill" />
      <view class="detail-body">
        <view class="course-level-row">
          <text :class="item.level === '入门' ? 'level-beginner' : 'level-advanced'">{{ item.level }}</text>
          <text class="course-hours">{{ item.totalHours }}小时</text>
        </view>
        <text class="detail-title">{{ item.title }}</text>
        <text class="detail-text">{{ item.description }}</text>
        <view class="detail-divider"></view>
        <text class="section-label">课程目录</text>
        <view class="lesson-list">
          <view class="lesson-item" v-for="(lesson, idx) in (item.lessons || [])" :key="lesson.id" @click="onLessonClick(lesson)">
            <view class="lesson-left">
              <view class="lesson-num">{{ idx + 1 }}</view>
              <view class="lesson-info">
                <text class="lesson-title">{{ lesson.title }}</text>
                <text class="lesson-duration">{{ lesson.duration }}</text>
              </view>
            </view>
            <text class="lesson-arrow">→</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 新闻详情 -->
    <view v-if="type === 'news'" class="detail-content">
      <view class="detail-body">
        <view class="news-detail-meta">
          <text class="news-category-tag">{{ item.category }}</text>
          <view v-if="item.isHot" class="news-hot-tag">
            <text class="news-hot-text">🔥 热门</text>
          </view>
        </view>
        <text class="detail-title">{{ item.title }}</text>
        <text class="news-time-text">发布于 {{ item.time }}</text>
        <view class="detail-divider"></view>
        <text class="detail-text">{{ item.summary }}</text>
        <view class="detail-divider"></view>
        <text class="detail-text">这是AI行业的重要动态。随着人工智能技术的快速发展，相关领域的创新和应用正在不断涌现，对各行各业产生深远影响。建议关注后续发展，了解最新趋势和机会。</text>
      </view>
    </view>

    <!-- 灵感/问答详情 -->
    <view v-if="type === 'idea' || type === 'topic'" class="detail-content">
      <view class="detail-body">
        <view class="author-row">
          <view class="author-avatar">{{ (item.author || '匿名')[0] }}</view>
          <text class="author-name">{{ item.author }}</text>
        </view>
        <text class="detail-title">{{ item.title }}</text>
        <text class="detail-text">{{ item.description || '' }}</text>
        <view v-if="item.tags && item.tags.length" class="detail-tags">
          <text class="detail-tag-item" v-for="tag in item.tags" :key="tag">{{ tag }}</text>
        </view>
        <view class="detail-divider"></view>
        <view class="detail-stats">
          <text class="stat-item">❤️ {{ item.likes }} 赞</text>
          <text class="stat-item">👁 {{ item.views || 0 }} 浏览</text>
          <text v-if="item.answers" class="stat-item">💬 {{ item.answers }} 回答</text>
        </view>
        <view v-if="item.solved" class="solved-badge">
          <text class="solved-text">✅ 此问题已解决</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { articles } from '../../data/articles'
import { tools } from '../../data/tools'
import { courses } from '../../data/courses'
import { newsList, ideas, topics } from '../../data/community'

export default {
  data() {
    return {
      type: '',
      id: '',
      item: {}
    }
  },
  onLoad(options) {
    this.type = options.type || ''
    this.id = options.id || ''
    this.loadDetail()
  },
  methods: {
    loadDetail() {
      const id = Number(this.id) || this.id
      switch (this.type) {
        case 'article':
          this.item = articles.find(a => a.id === id) || {}
          break
        case 'tool':
          this.item = tools.find(t => t.id === id) || {}
          break
        case 'course':
          this.item = courses.find(c => c.id === this.id) || {}
          break
        case 'news':
          this.item = newsList.find(n => n.id === id) || {}
          break
        case 'idea':
          this.item = ideas.find(i => i.id === id) || {}
          break
        case 'topic':
          this.item = topics.find(t => t.id === id) || {}
          break
      }
      // 设置导航栏标题
      if (this.item.title) {
        uni.setNavigationBarTitle({ title: this.item.title })
      }
    },
    onLessonClick(lesson) {
      uni.showToast({ title: '课程功能开发中', icon: 'none' })
    }
  }
}
</script>

<style scoped>
.detail-page { min-height: 100vh; background: #0F0F1A; }
.detail-content { padding-bottom: 40rpx; }
.detail-cover { width: 100%; height: 400rpx; }
.detail-body { padding: 30rpx; }

.detail-tag {
  display: inline-block;
  font-size: 22rpx;
  color: #22D3EE;
  background: rgba(34,211,238,0.1);
  padding: 6rpx 18rpx;
  border-radius: 16rpx;
  margin-bottom: 16rpx;
}
.detail-title {
  display: block;
  font-size: 40rpx;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16rpx;
  line-height: 1.4;
}
.detail-meta {
  display: flex;
  gap: 24rpx;
  margin-bottom: 20rpx;
}
.meta-item { font-size: 24rpx; color: #71717A; }
.detail-divider {
  height: 1rpx;
  background: rgba(255,255,255,0.05);
  margin: 24rpx 0;
}
.detail-text {
  display: block;
  font-size: 28rpx;
  color: #A1A1AA;
  line-height: 1.8;
}

/* Key Points */
.key-points { margin-top: 20rpx; }
.key-title { display: block; font-size: 30rpx; font-weight: 600; color: #FFFFFF; margin-bottom: 16rpx; }
.key-item { display: flex; gap: 12rpx; margin-bottom: 12rpx; }
.key-dot { font-size: 28rpx; color: #6366F1; }
.key-text { font-size: 26rpx; color: #A1A1AA; flex: 1; }

/* Tool Detail */
.tool-detail-header {
  display: flex;
  align-items: center;
  gap: 20rpx;
  padding: 30rpx;
  background: #1A1A2E;
}
.tool-detail-logo { width: 100rpx; height: 100rpx; border-radius: 24rpx; background: #252540; }
.tool-detail-info { flex: 1; }
.detail-company { display: block; font-size: 26rpx; color: #71717A; margin-top: 4rpx; }
.tool-detail-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16rpx; }
.tool-detail-rating { display: flex; align-items: center; gap: 4rpx; }
.rating-star { font-size: 24rpx; }
.rating-num { font-size: 24rpx; color: #A1A1AA; margin-left: 8rpx; }
.tool-detail-pricing { font-size: 24rpx; color: #71717A; }
.tool-badge-row { margin-bottom: 10rpx; }
.badge-recommend { font-size: 24rpx; color: #4ADE80; background: rgba(74,222,128,0.1); padding: 6rpx 18rpx; border-radius: 16rpx; }
.section-label { display: block; font-size: 30rpx; font-weight: 600; color: #FFFFFF; margin-bottom: 16rpx; }
.category-badge { display: inline-block; font-size: 24rpx; color: #22D3EE; background: rgba(34,211,238,0.1); padding: 8rpx 20rpx; border-radius: 20rpx; }

/* Course Detail */
.course-level-row { display: flex; gap: 12rpx; margin-bottom: 16rpx; }
.level-beginner { font-size: 24rpx; color: #4ADE80; background: rgba(74,222,128,0.1); padding: 6rpx 18rpx; border-radius: 16rpx; }
.level-advanced { font-size: 24rpx; color: #FB923C; background: rgba(251,146,60,0.1); padding: 6rpx 18rpx; border-radius: 16rpx; }
.course-hours { font-size: 24rpx; color: #A1A1AA; background: rgba(0,0,0,0.3); padding: 6rpx 18rpx; border-radius: 16rpx; }
.lesson-list { display: flex; flex-direction: column; gap: 16rpx; }
.lesson-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1A1A2E;
  border-radius: 20rpx;
  padding: 24rpx;
  border: 1rpx solid rgba(255,255,255,0.05);
}
.lesson-left { display: flex; align-items: center; gap: 20rpx; }
.lesson-num {
  width: 48rpx; height: 48rpx;
  border-radius: 50%;
  background: #6366F1;
  display: flex; align-items: center; justify-content: center;
  font-size: 22rpx; color: #FFFFFF; font-weight: 600;
}
.lesson-info { flex: 1; }
.lesson-title { display: block; font-size: 28rpx; color: #FFFFFF; font-weight: 500; }
.lesson-duration { display: block; font-size: 22rpx; color: #71717A; margin-top: 4rpx; }
.lesson-arrow { font-size: 28rpx; color: #6366F1; }

/* News Detail */
.news-detail-meta { display: flex; align-items: center; gap: 12rpx; margin-bottom: 16rpx; }
.news-category-tag { font-size: 22rpx; color: #22D3EE; background: rgba(34,211,238,0.1); padding: 6rpx 16rpx; border-radius: 16rpx; }
.news-hot-tag { background: rgba(239,68,68,0.1); padding: 6rpx 16rpx; border-radius: 16rpx; }
.news-hot-text { font-size: 22rpx; color: #EF4444; }
.news-time-text { display: block; font-size: 24rpx; color: #71717A; margin-bottom: 16rpx; }

/* Idea/Topic Detail */
.author-row { display: flex; align-items: center; gap: 16rpx; margin-bottom: 20rpx; }
.author-avatar {
  width: 64rpx; height: 64rpx;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366F1, #22D3EE);
  display: flex; align-items: center; justify-content: center;
  font-size: 28rpx; color: #FFFFFF; font-weight: 600;
}
.author-name { font-size: 28rpx; color: #A1A1AA; }
.detail-tags { display: flex; flex-wrap: wrap; gap: 10rpx; margin-top: 16rpx; }
.detail-tag-item { font-size: 22rpx; color: #6366F1; background: rgba(99,102,241,0.1); padding: 6rpx 18rpx; border-radius: 16rpx; }
.detail-stats { display: flex; gap: 30rpx; }
.stat-item { font-size: 26rpx; color: #71717A; }
.solved-badge { margin-top: 20rpx; background: rgba(74,222,128,0.1); border-radius: 16rpx; padding: 16rpx 20rpx; }
.solved-text { font-size: 26rpx; color: #4ADE80; }
</style>
