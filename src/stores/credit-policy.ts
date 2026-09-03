export type CreditRight = 'banned' | 'community-read' | 'community-interact' | 'market-read' | 'market-buy' | 'market-publish' | 'invite-exchange'

export interface CreditPolicy {
  label: string
  description: string
  rights: CreditRight[]
}

export function policyForScore(score: number): CreditPolicy {
  if (score < 50) return { label: '已限制访问', description: '信用分低于 50 分，暂时不能进入小程序。你可提交 2 次申诉。', rights: ['banned'] }
  if (score < 60) return { label: '社区浏览', description: '信用分低于 60 分，目前只能浏览兴趣社区，不能互动。', rights: ['community-read'] }
  if (score < 75) return { label: '社区互动', description: '你可以浏览和参与兴趣社区，但交易市场尚未开放。', rights: ['community-read', 'community-interact'] }
  if (score < 95) return { label: '交易参与', description: '你可以浏览、购买并与卖家沟通；达到 95 分后可发布交易帖。', rights: ['community-read', 'community-interact', 'market-read', 'market-buy'] }
  if (score < 100) return { label: '完整交易权限', description: '你已解锁交易市场全部权限，包括发布交易帖。', rights: ['community-read', 'community-interact', 'market-read', 'market-buy', 'market-publish'] }
  return { label: '完整权限 · 可兑换邀请码', description: '你拥有全部交易权限；消耗 5 信用分可兑换 1 个邀请码。兑换后信用分降至 95 分，需再次积累才可兑换下一枚。', rights: ['community-read', 'community-interact', 'market-read', 'market-buy', 'market-publish', 'invite-exchange'] }
}
