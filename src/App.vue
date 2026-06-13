<script>
export default {
  onLaunch() {
    console.log('AI全知通 App Launch')
  },
  onShow() {
    console.log('AI全知通 App Show')
  },
  onHide() {
    console.log('AI全知通 App Hide')
  }
}
</script>

<style>
/* 全局样式 - 暗色科技风 */
page {
  background-color: #0F0F1A;
  color: #FFFFFF;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 28rpx;
  line-height: 1.6;
  width: 100%;
  min-height: 100vh;
}

/* 强制H5页面容器铺满 */
uni-page-body,
uni-page-wrapper,
uni-page {
  width: 100% !important;
  min-height: 100vh !important;
  background-color: #0F0F1A !important;
}

/* 主题色变量 */
:root {
  --primary: #6366F1;
  --secondary: #8B5CF6;
  --accent: #22D3EE;
  --bg-primary: #0F0F1A;
  --bg-secondary: #1A1A2E;
  --bg-tertiary: #252540;
  --text-primary: #FFFFFF;
  --text-secondary: #A1A1AA;
  --text-muted: #71717A;
}

/* 通用样式 */
.container {
  padding: 0 30rpx;
}

.section-title {
  font-size: 40rpx;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8rpx;
}

.section-subtitle {
  font-size: 28rpx;
  color: #A1A1AA;
  margin-bottom: 30rpx;
}

/* 卡片样式 */
.card {
  background-color: #1A1A2E;
  border-radius: 24rpx;
  padding: 28rpx;
  margin-bottom: 24rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.05);
}

/* 渐变文字 */
.gradient-text {
  background: linear-gradient(135deg, #6366F1, #22D3EE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 主按钮 */
.btn-primary {
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: #FFFFFF;
  border: none;
  border-radius: 20rpx;
  padding: 20rpx 48rpx;
  font-size: 30rpx;
  font-weight: 600;
  text-align: center;
}

.btn-secondary {
  background: transparent;
  color: #6366F1;
  border: 2rpx solid #6366F1;
  border-radius: 20rpx;
  padding: 20rpx 48rpx;
  font-size: 30rpx;
  font-weight: 600;
  text-align: center;
}

/* 标签 */
.tag {
  display: inline-block;
  padding: 4rpx 16rpx;
  background: rgba(99, 102, 241, 0.1);
  color: #6366F1;
  font-size: 22rpx;
  border-radius: 20rpx;
}

/* 分割线 */
.divider {
  height: 1rpx;
  background: rgba(255, 255, 255, 0.05);
  margin: 24rpx 0;
}

/* TabBar 美化 */
uni-tabbar {
  background-color: #12121F !important;
  border-top: 1rpx solid rgba(99, 102, 241, 0.15) !important;
  box-shadow: 0 -4rpx 30rpx rgba(0, 0, 0, 0.4) !important;
  padding-top: 6rpx !important;
}
.uni-tabbar {
  background-color: #12121F !important;
  border-top: 1rpx solid rgba(99, 102, 241, 0.15) !important;
}
uni-tabbar .uni-tabbar__item {
  padding-top: 4px !important;
}
uni-tabbar .uni-tabbar__label {
  font-size: 10px !important;
  margin-top: 2px !important;
}
uni-tabbar .uni-tabbar__icon {
  width: 24px !important;
  height: 24px !important;
}
</style>
