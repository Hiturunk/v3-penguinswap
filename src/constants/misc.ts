import { Percent } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

export const VERSION = '0.3 - Slimy Sludge'
export const DEFAULTTOKEN = '0x30bcd71b8d21fe830e493b30e90befba29de9114'
export const IS_ON_APP_URL = window && window.location.hostname === 'https://v3.penguinswap.eth.limo'
export const L2_DEADLINE_FROM_NOW = 60 * 5

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const NetworkContextName = 'NETWORK'

// 30 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 30

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis JSBI.BigInt
const BIPS_BASE = JSBI.BigInt(10000)
export const ONE_BIPS = new Percent(JSBI.BigInt(1), BIPS_BASE)

// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(9900), BIPS_BASE) // Warning REMOVED
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(9900), BIPS_BASE) // Warning REMOVED
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(9900), BIPS_BASE) // Warning REMOVED

// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(99000), BIPS_BASE) // Warning REMOVED
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(99000), BIPS_BASE) // Warning REMOVED

export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(1000), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// URLs for the PenguinParty
export const PENGUIN_URLS = {
  home: 'https://penguinparty.eth.limo',
  saren: 'https://saren.io',
  medium: 'https://hiturunk.medium.com',
  github: 'https://github.com/penguinparty-eth',
  discord: 'https://discord.gg/pkmBgQr',
  treasury: 'https://gnosis-safe.io/app/#/safes/0x686B4535FF6573cef3FF37419A4fc6Ac775Ec7ea/balances',
  voting: 'https://snapshot.page/#/penguin-party',
  analytics: 'https://penguinalytics.eth.limo/',
  youtube: 'https://www.youtube.com/channel/UCGyB44deYZH41xxUL_Fwtig/featured',
}
