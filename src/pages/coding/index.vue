<template>
  <view class="coding-page">
    <view class="header">
      <text class="page-title">代码创造营</text>
      <text class="page-subtitle">Vibe Coding - 零基础也能开发项目</text>
    </view>

    <!-- 课程卡片 -->
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

    <!-- 推荐工具 -->
    <view class="section">
      <text class="section-title">🛠️ 推荐AI编程工具</text>
      <view class="tools-row">
        <view class="mini-tool-card" v-for="tool in codingTools" :key="tool.name">
          <text class="tool-emoji">{{ tool.emoji }}</text>
          <text class="tool-name">{{ tool.name }}</text>
          <text class="tool-desc">{{ tool.desc }}</text>
        </view>
      </view>
    </view>

    <!-- 学习路径 -->
    <view class="section bg-secondary">
      <text class="section-title">🗺️ 学习路径</text>
      <view class="path-list">
        <view class="path-item" v-for="(step, idx) in learningPath" :key="idx">
          <view class="path-dot">
            <text class="path-num">{{ idx + 1 }}</text>
          </view>
          <view class="path-content">
            <text class="path-title">{{ step.title }}</text>
            <text class="path-desc">{{ step.desc }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { courses } from '../../data/courses'

export default {
  data() {
    return {
      courses,
      codingTools: [
        { emoji: '💻', name: 'Cursor', desc: 'AI原生编辑器' },
        { emoji: '🤖', name: 'CodeBuddy', desc: '腾讯云AI助手' },
        { emoji: '🔧', name: 'GitHub Copilot', desc: 'AI代码补全' },
        { emoji: '⚡', name: '通义灵码', desc: '阿里AI助手' },
      ],
      learningPath: [
        { title: '环境搭建', desc: '安装Cursor等AI编程工具' },
        { title: 'HTML/CSS入门', desc: '用AI生成你的第一个网页' },
        { title: 'JavaScript基础', desc: '让网页"动"起来' },
        { title: 'AI辅助编程', desc: '掌握Prompt技巧' },
        { title: '项目实战', desc: '完成一个完整项目' },
        { title: '部署上线', desc: '发布到互联网' },
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
.coding-page {
  padding: 20rpx 30rpx;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}
.header { margin-bottom: 30rpx; }
.page-title { display: block; font-size: 48rpx; font-weight: 700; color: #FFFFFF; }
.page-subtitle { display: block; font-size: 28rpx; color: #A1A1AA; margin-top: 8rpx; }

.courses-list { display: flex; flex-direction: column; gap: 24rpx; width: 100%; }
.course-card {
  background: #1A1A2E;
  border-radius: 24rpx;
  overflow: hidden;
  border: 1rpx solid rgba(255,255,255,0.05);
  width: 100%;
  box-sizing: border-box;
}
.course-cover { width: 100%; height: 320rpx; }
.course-info { padding: 24rpx 28rpx; }
.course-level-row { display: flex; gap: 12rpx; margin-bottom: 12rpx; }
.level-beginner { font-size: 22rpx; color: #4ADE80; background: rgba(74,222,128,0.1); padding: 4rpx 16rpx; border-radius: 16rpx; }
.level-advanced { font-size: 22rpx; color: #FB923C; background: rgba(251,146,60,0.1); padding: 4rpx 16rpx; border-radius: 16rpx; }
.course-hours { font-size: 22rpx; color: #A1A1AA; background: rgba(0,0,0,0.3); padding: 4rpx 16rpx; border-radius: 16rpx; }
.course-title { display: block; font-size: 32rpx; font-weight: 600; color: #FFFFFF; margin-bottom: 8rpx; }
.course-desc { display: block; font-size: 26rpx; color: #A1A1AA; margin-bottom: 16rpx; }
.course-lessons { font-size: 26rpx; color: #6366F1; font-weight: 500; }

.section { margin-top: 40rpx; padding-top: 10rpx; width: 100%; }
.bg-secondary { background-color: rgba(26,26,46,0.5); padding: 30rpx; border-radius: 24rpx; }
.section-title { display: block; font-size: 36rpx; font-weight: 700; color: #FFFFFF; margin-bottom: 24rpx; }

.tools-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
  width: 100%;
}
.mini-tool-card {
  width: calc(50% - 8rpx);
  background: #1A1A2E;
  border-radius: 20rpx;
  padding: 20rpx;
  text-align: center;
  border: 1rpx solid rgba(255,255,255,0.05);
  box-sizing: border-box;
}
.tool-emoji { display: block; font-size: 48rpx; margin-bottom: 8rpx; }
.tool-name { display: block; font-size: 28rpx; font-weight: 600; color: #FFFFFF; }
.tool-desc { display: block; font-size: 22rpx; color: #71717A; margin-top: 4rpx; }

.path-list { padding-left: 20rpx; }
.path-item {
  display: flex;
  gap: 20rpx;
  position: relative;
  padding: 20rpx 0;
  border-left: 4rpx solid #6366F1;
  padding-left: 30rpx;
}
.path-item:last-child { border-left-color: transparent; }
.path-dot {
  position: absolute;
  left: -18rpx;
  top: 24rpx;
  width: 36rpx; height: 36rpx;
  border-radius: 50%;
  background: #6366F1;
  display: flex; align-items: center; justify-content: center;
}
.path-num { font-size: 20rpx; color: #FFFFFF; font-weight: 600; }
.path-title { display: block; font-size: 28rpx; font-weight: 600; color: #FFFFFF; }
.path-desc { display: block; font-size: 24rpx; color: #A1A1AA; margin-top: 4rpx; }
</style>
