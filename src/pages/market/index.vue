<script setup lang="ts">
import PermissionBanner from '../../components/PermissionBanner.vue'
import { useUser } from '../../stores/user'
const { canTrade, canBuy, canPublish } = useUser()
const listings = [
  { name: '手冲咖啡入门套装', price: '¥ 128', owner: '阿石 · 信用 92', note: '同城自提，含滤杯与磨豆机' },
  { name: '周末闲置工作室时段', price: '¥ 60 / 小时', owner: '北岸 · 信用 88', note: '适合 2—4 人安静创作' }
]
const action = () => uni.showToast({ title: canBuy.value ? '交易操作入口已预留' : '当前信用分尚未解锁交易互动', icon: 'none' })
</script>

<template>
  <view class="page">
    <view class="hero"><text class="eyebrow">TRUSTED MARKET</text><view class="title">交易之前，<br />先有值得相信的人。</view></view>
    <PermissionBanner />
    <view class="rule"><text>交易约定</text><text>如实描述 · 守时交付 · 友善协商</text></view>
    <view class="section-head"><text>圈内好物</text><text class="more">筛选 ›</text></view>
    <view v-for="item in listings" :key="item.name" class="card listing" @click="action">
      <view class="cover">⌁</view>
      <view class="listing-body"><text class="name">{{ item.name }}</text><text class="price">{{ item.price }}</text><text class="muted">{{ item.owner }}</text><text class="note">{{ item.note }}</text></view>
    </view>
    <view class="publish" @click="action">{{ canPublish ? '发布一条交易信息' : '信用分达到 95 分可发布交易' }}</view>
  </view>
</template>

<style scoped>
.hero { padding: 22rpx 0 34rpx; }.rule { display: flex; flex-direction: column; gap: 7rpx; padding: 23rpx 26rpx; border-radius: 18rpx; background: #253a32; color: #fff; font-size: 25rpx; }.rule text:first-child { color: #d6e4ad; font-weight: 800; }.section-head { display: flex; justify-content: space-between; font-size: 30rpx; font-weight: 800; margin: 34rpx 4rpx 18rpx; }.more { color: #116149; font-size: 25rpx; }.listing { display: flex; gap: 22rpx; }.cover { width: 128rpx; height: 128rpx; flex: 0 0 128rpx; border-radius: 16rpx; display: flex; align-items: center; justify-content: center; background: #dce9df; color: #116149; font-size: 64rpx; }.listing-body { min-width: 0; }.name { display: block; font-size: 30rpx; font-weight: 800; }.price { display: block; margin: 10rpx 0; color: #b54135; font-size: 28rpx; font-weight: 800; }.note { display: block; color: #69736e; font-size: 23rpx; margin-top: 7rpx; }.publish { margin-top: 8rpx; padding: 25rpx; text-align: center; border-radius: 16rpx; border: 2rpx dashed #9bb5a8; color: #116149; font-size: 27rpx; font-weight: 700; }
</style>
