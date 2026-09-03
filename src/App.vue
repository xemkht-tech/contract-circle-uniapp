<script lang="ts">
export default {
  onLaunch() {
    console.log('契圈已启动')
  }
}
</script>

<style>
page { background: #f5f6f1; color: #1b2a25; font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif; }
.page { padding: 28rpx 28rpx 52rpx; }
.card { background: #fff; border-radius: 24rpx; padding: 28rpx; margin-bottom: 20rpx; box-shadow: 0 8rpx 24rpx rgba(27,42,37,.05); }
.eyebrow { color: #116149; font-size: 24rpx; font-weight: 700; letter-spacing: 2rpx; }
.title { font-size: 42rpx; font-weight: 800; margin-top: 12rpx; }
.muted { color: #69736e; font-size: 26rpx; line-height: 1.65; }
.button { display: inline-flex; align-items: center; justify-content: center; min-height: 76rpx; padding: 0 28rpx; border-radius: 38rpx; background: #116149; color: #fff; font-size: 28rpx; font-weight: 700; }
.button.ghost { background: #e5efe9; color: #116149; }
</style>
