<script setup lang="ts">
import CreditTimeline from '../../components/CreditTimeline.vue'
import { useUser } from '../../stores/user'
const { user, policy, canExchangeInvite, setScore, exchangeInvite } = useUser()
const scoreExamples = [48, 55, 65, 80, 90, 97, 100]
const redeemInvite = () => {
  if (exchangeInvite()) uni.showToast({ title: '已兑换 1 个邀请码，信用分变为 95', icon: 'none' })
}
</script>

<template>
  <view class="page">
    <view class="identity card">
      <view class="avatar">契</view>
      <view><text class="name">南山</text><text class="status">{{ policy.label }}</text></view>
      <view class="score"><text>{{ user.score }}</text><text>信用分</text></view>
    </view>
    <view class="card explain">
      <text class="eyebrow">你的权限说明</text>
      <text class="explain-title">{{ policy.label }}</text>
      <text class="muted">{{ policy.description }}</text>
    </view>
    <view class="card"><view class="card-title"><text>信用记录</text><text class="all">查看规则 ›</text></view><CreditTimeline /></view>
    <view class="card" v-if="canExchangeInvite"><view class="card-title"><text>邀请码兑换</text><text class="quota">消耗 5 信用分</text></view><text class="muted">信用分达到 100 分后，可消耗 5 分兑换 1 个邀请码。兑换后回到 95 分，需重新积累至 100 分才能兑换下一枚。</text><view class="invite button" @click="redeemInvite">兑换 1 个邀请码</view></view>
    <view class="card rules"><view class="card-title"><text>如何获得信用分</text></view><text>60 分为注册基础分</text><text>75 分前：阅读社区理念并答题合格，一次 +15 分</text><text>75–84 分：真实互助帖每 100 赞或 10 收藏，+1 分；有效保证金每 100 元，+1 分</text><text>85 分起：单笔大于 100 元的真实交易，买卖双方各 +1 分</text></view>
    <view class="debug"><text>原型演示：切换信用分</text><view class="tiers"><text v-for="score in scoreExamples" :key="score" :class="{ active: user.score === score }" @click="setScore(score)">{{ score }} 分</text></view></view>
  </view>
</template>

<style scoped>
.identity { display: flex; align-items: center; gap: 18rpx; margin-top: 10rpx; }.avatar { width: 84rpx; height: 84rpx; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #116149; color: #fff; font-size: 35rpx; font-weight: 800; }.name { display: block; font-size: 34rpx; font-weight: 800; }.status { color: #116149; font-size: 23rpx; }.score { margin-left: auto; text-align: right; }.score text { display: block; }.score text:first-child { font-size: 42rpx; font-weight: 800; color: #116149; }.score text:last-child { color: #69736e; font-size: 22rpx; }.explain { border-left: 8rpx solid #116149; }.explain-title { display: block; margin: 14rpx 0 10rpx; font-size: 32rpx; font-weight: 800; }.card-title { display: flex; justify-content: space-between; margin-bottom: 20rpx; font-size: 30rpx; font-weight: 800; }.all,.quota { color: #116149; font-size: 24rpx; }.invite { margin-top: 22rpx; }.rules text { display: block; color: #69736e; font-size: 24rpx; line-height: 1.65; margin-top: 10rpx; }.debug { margin: 30rpx 2rpx 0; color: #89938e; font-size: 23rpx; }.tiers { display: flex; gap: 13rpx; margin-top: 12rpx; flex-wrap: wrap; }.tiers text { padding: 10rpx 15rpx; border-radius: 10rpx; background: #e4e9e5; }.tiers .active { background: #116149; color: #fff; }
</style>
