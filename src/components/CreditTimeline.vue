<script setup lang="ts">
import { useUser } from '../stores/user'
const { events } = useUser()
</script>

<template>
  <view class="timeline">
    <view v-for="event in events" :key="event.id" class="event">
      <view class="rail"><view class="point" /></view>
      <view class="content">
        <view class="row"><text class="event-title">{{ event.title }}</text><text :class="['change', event.change < 0 ? 'down' : '']">{{ event.change > 0 ? '+' : '' }}{{ event.change }}</text></view>
        <text class="detail">{{ event.detail }}</text>
        <text class="date">{{ event.date }} · {{ event.source }}</text>
      </view>
    </view>
  </view>
</template>

<style scoped>
.event { display: flex; padding: 8rpx 0 22rpx; }
.rail { width: 30rpx; border-right: 2rpx solid #d7e5dd; margin-right: 22rpx; }
.point { width: 14rpx; height: 14rpx; border-radius: 50%; background: #116149; transform: translateX(9rpx); }
.content { flex: 1; }.row { display: flex; justify-content: space-between; gap: 12rpx; }.event-title { font-size: 28rpx; font-weight: 700; }.change { color: #116149; font-weight: 800; }.down { color: #b54135; }.detail,.date { display: block; color: #69736e; font-size: 24rpx; line-height: 1.55; margin-top: 8rpx; }.date { color: #98a19d; }
</style>
