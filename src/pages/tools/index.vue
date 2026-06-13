<template>
  <view class="tools-page">
    <view class="header">
      <text class="page-title">工具导航</text>
      <text class="page-subtitle">13大分类，精选80+优质AI工具</text>
    </view>

    <!-- 分类标签云 -->
    <view class="category-wrap">
      <view
        v-for="cat in toolCategories"
        :key="cat.id"
        :class="['category-tag', activeCategory === cat.id ? 'category-active' : '']"
        @click="activeCategory = cat.id"
      >
        <text :class="activeCategory === cat.id ? 'cat-text-active' : 'cat-text'">{{ cat.name }}</text>
      </view>
    </view>

    <!-- 工具网格 -->
    <view class="tools-grid">
      <view class="tool-card" v-for="tool in filteredTools" :key="tool.id" @click="goDetail('tool', tool.id)">
        <view v-if="tool.featured" class="tool-badge">
          <text class="badge-text">推荐</text>
        </view>
        <image :src="tool.logo" class="tool-logo" mode="aspectFit" />
        <text class="tool-name">{{ tool.name }}</text>
        <text class="tool-company">{{ tool.company }}</text>
        <text class="tool-summary">{{ tool.summary }}</text>
        <view class="tool-footer">
          <text class="rating-star">⭐</text>
          <text class="rating-num">{{ tool.rating }}</text>
          <text class="tool-pricing">{{ tool.pricing }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { tools, toolCategories } from '../../data/tools'

export default {
  data() {
    return {
      tools,
      toolCategories,
      activeCategory: 'all',
    }
  },
  computed: {
    filteredTools() {
      if (this.activeCategory === 'all') return this.tools
      return this.tools.filter(t => t.category === this.activeCategory)
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
.tools-page {
  padding: 20rpx 30rpx;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}
.header { margin-bottom: 24rpx; }
.page-title { display: block; font-size: 48rpx; font-weight: 700; color: #FFFFFF; }
.page-subtitle { display: block; font-size: 28rpx; color: #A1A1AA; margin-top: 8rpx; }

.category-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  margin-bottom: 28rpx;
  width: 100%;
}
.category-tag {
  display: inline-flex;
  align-items: center;
  padding: 10rpx 24rpx;
  background: #252540;
  border-radius: 24rpx;
  flex-shrink: 0;
}
.category-active {
  background: #6366F1;
}
.cat-text { font-size: 24rpx; color: #A1A1AA; }
.cat-text-active { font-size: 24rpx; color: #FFFFFF; font-weight: 600; }
.cat-text-active { font-size: 24rpx; color: #FFFFFF; }

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
  width: 100%;
}
.tool-card {
  background: #1A1A2E;
  border-radius: 24rpx;
  padding: 28rpx;
  border: 1rpx solid rgba(255,255,255,0.05);
  width: calc(50% - 10rpx);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.tool-card:active {
  transform: scale(0.96);
  box-shadow: 0 0 0 1rpx rgba(99,102,241,0.4);
}
.tool-card > view,
.tool-card > text,
.tool-card > image {
  pointer-events: none;
}
.tool-badge {
  position: absolute;
  top: 12rpx;
  right: 12rpx;
  background: rgba(34,211,238,0.15);
  padding: 4rpx 14rpx;
  border-radius: 20rpx;
}
.badge-text { font-size: 20rpx; color: #22D3EE; }
.tool-logo {
  width: 88rpx;
  height: 88rpx;
  border-radius: 22rpx;
  background: #252540;
  margin-bottom: 16rpx;
  margin-top: 8rpx;
}
.tool-name {
  display: block;
  font-size: 28rpx;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 4rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
.tool-company {
  display: block;
  font-size: 22rpx;
  color: #71717A;
  margin-bottom: 12rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
.tool-summary {
  display: block;
  font-size: 22rpx;
  color: #A1A1AA;
  margin-bottom: 16rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  line-height: 1.4;
}
.tool-footer {
  display: flex;
  align-items: center;
  gap: 6rpx;
  width: 100%;
  justify-content: center;
}
.rating-star { font-size: 20rpx; }
.rating-num { font-size: 20rpx; color: #A1A1AA; }
.tool-pricing {
  font-size: 18rpx;
  color: #71717A;
  margin-left: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 60%;
}
</style>
