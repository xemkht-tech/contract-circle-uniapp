<script setup lang="ts">
import PermissionBanner from '../../components/PermissionBanner.vue'
import { useUser } from '../../stores/user'
const { canInteract } = useUser()
const topics = [
  { circle: '城市徒步', title: '周日去走一段安静的老城路线', meta: '林知夏 · 12 条讨论', tag: '本周活动' },
  { circle: '独立咖啡', title: '把小店做成邻里客厅，需要什么？', meta: '白昼电台 · 8 条讨论', tag: '经验分享' },
  { circle: '旧物修复', title: '一把木椅的第二次生命', meta: '木木 · 16 条讨论', tag: '作品展示' }
]
const interact = () => uni.showToast({ title: canInteract.value ? '发布功能即将接入' : '注册后可参与讨论', icon: 'none' })
</script>

<template>
  <view class="page">
    <view class="hero">
      <text class="eyebrow">CONTRACT CIRCLE</text>
      <view class="title">因为共同的兴趣，<br />认真地认识彼此。</view>
      <text class="muted intro">小而可信的圈子，让每一次互动都留下值得信任的记录。</text>
    </view>
    <PermissionBanner />
    <view class="section-head"><text>正在发生</text><text class="more">全部圈子 ›</text></view>
    <view v-for="topic in topics" :key="topic.title" class="card topic">
      <text class="tag">{{ topic.tag }}</text>
      <text class="circle">{{ topic.circle }}</text>
      <text class="topic-title">{{ topic.title }}</text>
      <text class="muted">{{ topic.meta }}</text>
    </view>
    <view class="compose" @click="interact"><text>＋</text><text>{{ canInteract ? '发起一个真诚的话题' : '注册后参与讨论' }}</text></view>
  </view>
</template>

<style scoped>
.hero { padding: 22rpx 0 34rpx; }.intro { display: block; margin-top: 18rpx; }.section-head { display: flex; justify-content: space-between; font-size: 30rpx; font-weight: 800; margin: 34rpx 4rpx 18rpx; }.more { color: #116149; font-size: 25rpx; font-weight: 600; }.topic { position: relative; }.tag { position: absolute; right: 28rpx; top: 28rpx; padding: 7rpx 14rpx; background: #f1f4ec; border-radius: 10rpx; color: #557468; font-size: 21rpx; }.circle { display: block; color: #116149; font-weight: 700; font-size: 25rpx; }.topic-title { display: block; font-size: 32rpx; font-weight: 800; margin: 13rpx 0; line-height: 1.4; }.compose { position: fixed; right: 28rpx; bottom: 132rpx; display: flex; gap: 12rpx; align-items: center; padding: 22rpx 26rpx; border-radius: 44rpx; background: #116149; color: #fff; font-size: 26rpx; box-shadow: 0 10rpx 24rpx rgba(17,97,73,.25); }.compose text:first-child { font-size: 36rpx; line-height: .7; }
</style>
