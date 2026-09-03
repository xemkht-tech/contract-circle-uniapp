export type UserTier = 'guest' | 'member' | 'verified'

export interface CreditEvent {
  id: string
  title: string
  detail: string
  change: number
  date: string
  source: 'community' | 'trade' | 'invite' | 'review'
}
