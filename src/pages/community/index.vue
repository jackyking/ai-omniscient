<template>
  <view class="community-page">
    <view class="header">
      <text class="page-title">灵感社区</text>
      <text class="page-subtitle">分享AI奇思妙想，交流创意灵感</text>
    </view>

    <!-- Tab切换 -->
    <view class="tab-bar">
      <view
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-item', activeTab === tab.id ? 'tab-active' : '']"
        @click="activeTab = tab.id"
      >
        <text :class="activeTab === tab.id ? 'tab-text-active' : 'tab-text'">{{ tab.name }}</text>
      </view>
    </view>

    <!-- 奇思妙想 -->
    <view v-if="activeTab === 'ideas'" class="ideas-list">
      <view class="idea-card" v-for="idea in ideas" :key="idea.id" @click="goDetail('idea', idea.id)">
        <view class="idea-header">
          <text class="idea-author">{{ idea.author }}</text>
          <view v-if="idea.isHot" class="idea-hot">
            <text class="idea-hot-text">🔥 热门</text>
          </view>
        </view>
        <text class="idea-title">{{ idea.title }}</text>
        <text class="idea-desc">{{ idea.description }}</text>
        <view class="idea-tags">
          <text class="idea-tag" v-for="tag in idea.tags" :key="tag">{{ tag }}</text>
        </view>
        <view class="idea-footer">
          <text class="idea-stat">❤️ {{ idea.likes }}</text>
          <text class="idea-stat">👁 {{ idea.views }}</text>
        </view>
      </view>
    </view>

    <!-- 问答讨论 -->
    <view v-if="activeTab === 'qa'" class="qa-list">
      <view class="qa-card" v-for="topic in topics" :key="topic.id" @click="goDetail('topic', topic.id)">
        <view class="qa-header">
          <text class="qa-author">{{ topic.author }}</text>
          <view v-if="topic.solved" class="qa-solved">
            <text class="qa-solved-text">✅ 已解决</text>
          </view>
        </view>
        <text class="qa-title">{{ topic.title }}</text>
        <view class="qa-footer">
          <text class="qa-tag">{{ topic.category }}</text>
          <text class="qa-stat">❤️ {{ topic.likes }}</text>
          <text class="qa-stat">💬 {{ topic.answers }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { ideas, topics } from '../../data/community'

export default {
  data() {
    return {
      ideas,
      topics,
      activeTab: 'ideas',
      tabs: [
        { id: 'ideas', name: '💡 奇思妙想' },
        { id: 'qa', name: '💬 问答讨论' },
      ]
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
.community-page {
  padding: 20rpx 30rpx;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}
.header { margin-bottom: 24rpx; }
.page-title { display: block; font-size: 48rpx; font-weight: 700; color: #FFFFFF; }
.page-subtitle { display: block; font-size: 28rpx; color: #A1A1AA; margin-top: 8rpx; }

.tab-bar { display: flex; gap: 0; margin-bottom: 24rpx; background: #1A1A2E; border-radius: 20rpx; overflow: hidden; width: 100%; }
.tab-item { flex: 1; padding: 20rpx; text-align: center; }
.tab-active { background: #6366F1; }
.tab-text { font-size: 28rpx; color: #A1A1AA; }
.tab-text-active { font-size: 28rpx; color: #FFFFFF; font-weight: 600; }

.ideas-list, .qa-list { display: flex; flex-direction: column; gap: 20rpx; width: 100%; }
.idea-card, .qa-card {
  background: #1A1A2E;
  border-radius: 24rpx;
  padding: 28rpx;
  border: 1rpx solid rgba(255,255,255,0.05);
  width: 100%;
  box-sizing: border-box;
}
.idea-header, .qa-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12rpx; }
.idea-author, .qa-author { font-size: 26rpx; color: #A1A1AA; }
.idea-hot, .qa-solved { padding: 4rpx 14rpx; border-radius: 16rpx; }
.idea-hot { background: rgba(239,68,68,0.1); }
.idea-hot-text { font-size: 22rpx; color: #EF4444; }
.qa-solved { background: rgba(74,222,128,0.1); }
.qa-solved-text { font-size: 22rpx; color: #4ADE80; }

.idea-title, .qa-title { display: block; font-size: 30rpx; font-weight: 600; color: #FFFFFF; margin-bottom: 10rpx; }
.idea-desc { display: block; font-size: 26rpx; color: #A1A1AA; margin-bottom: 16rpx; }
.idea-tags { display: flex; flex-wrap: wrap; gap: 8rpx; margin-bottom: 16rpx; }
.idea-tag { font-size: 22rpx; color: #6366F1; background: rgba(99,102,241,0.1); padding: 4rpx 14rpx; border-radius: 16rpx; }
.idea-footer, .qa-footer { display: flex; gap: 24rpx; }
.idea-stat, .qa-stat { font-size: 24rpx; color: #71717A; }
.qa-tag { font-size: 22rpx; color: #22D3EE; background: rgba(34,211,238,0.1); padding: 4rpx 14rpx; border-radius: 16rpx; margin-right: auto; }
</style>
