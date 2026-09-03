import { computed, reactive } from 'vue'
import type { CreditEvent } from '../types'
import { policyForScore } from './credit-policy'

const user = reactive({ score: 86, appealRemaining: 2, philosophyQuizPassed: false, activeDepositYuan: 0 })
const events: CreditEvent[] = [
  { id: '1', title: '完成一次守约交易', detail: '买卖双方均确认物品描述与交付一致。', change: 6, date: '08-25', source: 'trade' },
  { id: '2', title: '优质话题被圈主推荐', detail: '在「城市徒步」圈发布的路线帖获得推荐。', change: 3, date: '08-19', source: 'community' },
  { id: '3', title: '为受邀成员提供担保', detail: '担保关系仍在有效期内，邀请配额占用 1 个。', change: 0, date: '08-12', source: 'invite' }
]

export function useUser() {
  const policy = computed(() => policyForScore(user.score))
  const hasRight = (right: string) => policy.value.rights.includes(right as never)
  const canInteract = computed(() => hasRight('community-interact'))
  const canTrade = computed(() => hasRight('market-read'))
  const canBuy = computed(() => hasRight('market-buy'))
  const canPublish = computed(() => hasRight('market-publish'))
  const canExchangeInvite = computed(() => hasRight('invite-exchange'))
  const setScore = (score: number) => { user.score = score }
  const exchangeInvite = () => {
    if (!canExchangeInvite.value) return false
    user.score = 95
    return true
  }
  return { user, events, policy, hasRight, canInteract, canTrade, canBuy, canPublish, canExchangeInvite, setScore, exchangeInvite }
}
