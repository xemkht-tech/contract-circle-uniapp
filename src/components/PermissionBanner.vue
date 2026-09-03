<script setup lang="ts">
import { computed } from 'vue'
import { useUser } from '../stores/user'
const { policy, user } = useUser()
const message = computed(() => `当前信用分 ${user.score} 分：${policy.value.description}`)
</script>

<template>
  <view class="banner"><text class="dot">●</text><text>{{ message }}</text></view>
</template>

<style scoped>
.banner { display: flex; gap: 12rpx; padding: 20rpx 24rpx; border-radius: 16rpx; background: #e5efe9; color: #225743; font-size: 25rpx; line-height: 1.5; margin-bottom: 22rpx; }
.dot { color: #116149; }
</style>
