<template>
  <view class="news-page">
    <view class="header">
      <text class="page-title">AI资讯</text>
      <text class="page-subtitle">行业动态、融资、政策、产品发布</text>
    </view>

    <!-- 分类 -->
    <scroll-view scroll-x class="category-scroll">
      <view
        v-for="cat in newsCategories"
        :key="cat.id"
        :class="['category-tag', activeCategory === cat.id ? 'category-active' : '']"
        @click="activeCategory = cat.id"
      >
        <text :class="activeCategory === cat.id ? 'cat-text-active' : 'cat-text'">{{ cat.name }}</text>
      </view>
    </scroll-view>

    <!-- 精选要闻 -->
    <view class="hot-section" v-if="activeCategory === 'all'">
      <text class="section-title">🔥 精选要闻</text>
      <scroll-view scroll-x class="hot-scroll">
        <view class="hot-card" v-for="news in hotNews" :key="news.id" @click="goDetail('news', news.id)">
          <view class="hot-badge">
            <text class="hot-badge-text">HOT</text>
          </view>
          <text class="hot-title">{{ news.title }}</text>
          <text class="hot-summary">{{ news.summary }}</text>
          <text class="hot-time">{{ news.time }}</text>
        </view>
      </scroll-view>
    </view>

    <!-- 资讯列表 -->
    <view class="news-list">
      <view class="news-card" v-for="news in filteredNews" :key="news.id" @click="goDetail('news', news.id)">
        <view class="news-header">
          <text class="news-category">{{ news.category }}</text>
          <view v-if="news.isHot" class="news-hot">
            <text class="news-hot-text">热门</text>
          </view>
        </view>
        <text class="news-title">{{ news.title }}</text>
        <text class="news-summary">{{ news.summary }}</text>
        <text class="news-time">{{ news.time }}</text>
      </view>
    </view>

    <!-- 快捷入口 -->
    <view class="section">
      <text class="section-title">📌 快捷入口</text>
      <view class="quick-links">
        <view class="quick-item" v-for="link in quickLinks" :key="link.name">
          <text class="quick-emoji">{{ link.emoji }}</text>
          <text class="quick-name">{{ link.name }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { newsList } from '../../data/community'

export default {
  data() {
    return {
      newsList,
      activeCategory: 'all',
      newsCategories: [
        { id: 'all', name: '全部' },
        { id: '行业新闻', name: '行业新闻' },
        { id: '融资动态', name: '融资动态' },
        { id: '扶持政策', name: '扶持政策' },
        { id: '产品发布', name: '产品发布' },
      ],
      quickLinks: [
        { emoji: '📅', name: '融资日历' },
        { emoji: '📋', name: '政策汇编' },
        { emoji: '🚀', name: '创业指南' },
        { emoji: '📊', name: '行业报告' },
      ]
    }
  },
  computed: {
    hotNews() {
      return this.newsList.filter(n => n.isHot)
    },
    filteredNews() {
      if (this.activeCategory === 'all') return this.newsList
      return this.newsList.filter(n => n.category === this.activeCategory)
    }
  },
  methods: {
    goDetail(type, id) {
      uni.navigateTo({ url: `/pages/detail/index?type=${type}&id=${id}` })
    }
  }
}
</script>

<style scoped>
.news-page {
  padding: 20rpx 30rpx;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}
.header { margin-bottom: 24rpx; }
.page-title { display: block; font-size: 48rpx; font-weight: 700; color: #FFFFFF; }
.page-subtitle { display: block; font-size: 28rpx; color: #A1A1AA; margin-top: 8rpx; }

.category-scroll { display: flex; gap: 16rpx; margin-bottom: 24rpx; white-space: nowrap; width: 100%; }
.category-tag { display: inline-block; padding: 12rpx 28rpx; background: #252540; border-radius: 30rpx; flex-shrink: 0; }
.category-active { background: #6366F1; }
.cat-text { font-size: 26rpx; color: #A1A1AA; }
.cat-text-active { font-size: 26rpx; color: #FFFFFF; }

.hot-section { margin-bottom: 30rpx; width: 100%; }
.section-title { display: block; font-size: 34rpx; font-weight: 700; color: #FFFFFF; margin-bottom: 20rpx; }
.hot-scroll { white-space: nowrap; width: 100%; }
.hot-card {
  display: inline-block;
  width: 560rpx;
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  border-radius: 24rpx;
  padding: 28rpx;
  margin-right: 20rpx;
  vertical-align: top;
  white-space: normal;
}
.hot-badge { background: rgba(255,255,255,0.2); display: inline-block; padding: 4rpx 14rpx; border-radius: 10rpx; margin-bottom: 12rpx; }
.hot-badge-text { font-size: 22rpx; color: #FFFFFF; font-weight: 600; }
.hot-title { display: block; font-size: 30rpx; font-weight: 600; color: #FFFFFF; margin-bottom: 10rpx; }
.hot-summary { display: block; font-size: 24rpx; color: rgba(255,255,255,0.8); margin-bottom: 10rpx; }
.hot-time { font-size: 22rpx; color: rgba(255,255,255,0.6); }

.news-list { display: flex; flex-direction: column; gap: 20rpx; width: 100%; }
.news-card {
  background: #1A1A2E;
  border-radius: 24rpx;
  padding: 28rpx;
  border: 1rpx solid rgba(255,255,255,0.05);
  width: 100%;
  box-sizing: border-box;
}
.news-header { display: flex; align-items: center; gap: 12rpx; margin-bottom: 12rpx; }
.news-category { font-size: 22rpx; color: #22D3EE; background: rgba(34,211,238,0.1); padding: 4rpx 14rpx; border-radius: 16rpx; }
.news-hot { background: rgba(239,68,68,0.1); padding: 4rpx 14rpx; border-radius: 16rpx; }
.news-hot-text { font-size: 22rpx; color: #EF4444; }
.news-title { display: block; font-size: 30rpx; font-weight: 600; color: #FFFFFF; margin-bottom: 10rpx; }
.news-summary { display: block; font-size: 26rpx; color: #A1A1AA; margin-bottom: 12rpx; }
.news-time { font-size: 22rpx; color: #71717A; }

.quick-links { display: flex; gap: 16rpx; flex-wrap: wrap; width: 100%; }
.quick-item {
  flex: 1;
  min-width: calc(50% - 8rpx);
  background: #1A1A2E;
  border-radius: 20rpx;
  padding: 24rpx;
  text-align: center;
  border: 1rpx solid rgba(255,255,255,0.05);
  box-sizing: border-box;
}
.quick-emoji { display: block; font-size: 48rpx; margin-bottom: 8rpx; }
.quick-name { font-size: 26rpx; color: #FFFFFF; font-weight: 500; }
</style>
