import { WETH9, Token, Ether } from '@uniswap/sdk-core'
import { UNI_ADDRESS } from './addresses'
import { SupportedChainId } from './chains'

export const AMPL = new Token(
  SupportedChainId.MAINNET,
  '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
  9,
  'AMPL',
  'Ampleforth'
)
export const DAI = new Token(
  SupportedChainId.MAINNET,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const USDC = new Token(
  SupportedChainId.MAINNET,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD//C'
)
export const USDC_ARBITRUM = new Token(
  SupportedChainId.ARBITRUM_ONE,
  '0xe865dF68133fcEd7c2285ff3896B406CAfAa2dB8',
  6,
  'USDC',
  'USD//C'
)
export const DAI_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai stable coin'
)
export const USDT = new Token(
  SupportedChainId.MAINNET,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD'
)
export const USDT_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
  6,
  'USDT',
  'Tether USD'
)
export const WBTC = new Token(
  SupportedChainId.MAINNET,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const WBTC_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const FEI = new Token(
  SupportedChainId.MAINNET,
  '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
  18,
  'FEI',
  'Fei USD'
)
export const TRIBE = new Token(
  SupportedChainId.MAINNET,
  '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
  18,
  'TRIBE',
  'Tribe'
)
export const FRAX = new Token(
  SupportedChainId.MAINNET,
  '0x853d955aCEf822Db058eb8505911ED77F175b99e',
  18,
  'FRAX',
  'Frax'
)
export const FXS = new Token(
  SupportedChainId.MAINNET,
  '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
  18,
  'FXS',
  'Frax Share'
)
export const renBTC = new Token(
  SupportedChainId.MAINNET,
  '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  8,
  'renBTC',
  'renBTC'
)
export const ETH2X_FLI = new Token(
  SupportedChainId.MAINNET,
  '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD',
  18,
  'ETH2x-FLI',
  'ETH 2x Flexible Leverage Index'
)
// PenguinParty tokens
export const FISH = new Token(
  SupportedChainId.MAINNET,
  '0x30bcd71b8d21fe830e493b30e90befba29de9114',
  18,
  '🐟',
  'Penguin Party Fish'
)
export const CRAB = new Token(
  SupportedChainId.MAINNET,
  '0x8669fA2B06829aa5FaBC47b5E5d0e66b85F1522E',
  18,
  '🦀',
  'Penguin Party Crab'
)
export const SHRIMP = new Token(
  SupportedChainId.MAINNET,
  '0x5a43589fe110bb355ba4a90a9c01476d87e68de8',
  18,
  '🦐',
  'Penguin Party Shrimp'
)
export const TORI = new Token(
  SupportedChainId.MAINNET,
  '0x26780078e07cc33f0323df626f42fa92971561d4',
  18,
  '⛩️',
  'Penguin Party Tori'
)
export const ISLA = new Token(
  SupportedChainId.MAINNET,
  '0x20a68f9e34076b2dc15ce726d7eebb83b694702d',
  18,
  'ISLA',
  'Defiville Island Token (defiville.finance)'
)
export const SAREN = new Token(
  SupportedChainId.MAINNET,
  '0xbd4a858139b155219e2c8d10135003fdef720b6b',
  18,
  'SAREN',
  'Saren Token'
)
export const KEK = new Token(
  SupportedChainId.MAINNET,
  '0x3fa400483487A489EC9b1dB29C4129063EEC4654',
  18,
  'KEK',
  'Cryptokek.com'
)
export const COMP = new Token(
  SupportedChainId.MAINNET,
  '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  18,
  'COMP',
  'Compound'
)
export const MKR = new Token(SupportedChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker')
export const AUSDC = new Token(
  SupportedChainId.MAINNET,
  '0x9bA00D6856a4eDF4665BcA2C2309936572473B7E',
  18,
  'aUSDC',
  'Aave Interest bearing USDC'
)
export const ADAITWO = new Token(
  SupportedChainId.MAINNET,
  '0x028171bca77440897b824ca71d1c56cac55b68a3',
  18,
  'aDAI-V2',
  'V2 - Aave Interest bearing DAI'
)
export const UNITOKEN = new Token(
  SupportedChainId.MAINNET,
  '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  18,
  'UNI',
  'Uniswap Token'
)
export const BUIDL = new Token(
  SupportedChainId.MAINNET,
  '0x7b123f53421b1bF8533339BFBdc7C98aA94163db',
  18,
  'BUIDL',
  'DFOHub BUIDL'
)
export const ADAI = new Token(
  SupportedChainId.MAINNET,
  '0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d',
  18,
  'aDAI',
  'Aave Interest bearing DAI'
)
export const AETH = new Token(
  SupportedChainId.MAINNET,
  '0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04',
  18,
  'aETH',
  'Aave Interest bearing ETH'
)
export const LINK = new Token(
  SupportedChainId.MAINNET,
  '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  18,
  'LINK',
  'ChainLink Token'
)
export const SOCKS = new Token(
  SupportedChainId.MAINNET,
  '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
  18,
  '🧦',
  'Uniswap SOCKS'
)
export const DFOUSD = new Token(
  SupportedChainId.MAINNET,
  '0x44086035439e676c02d411880fccb9837ce37c57',
  18,
  'uSD',
  'DFOHub StableDollar'
)
export const ZEROXBTC = new Token(
  SupportedChainId.MAINNET,
  '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
  18,
  '0xBTC',
  '0xBitcoin'
)
export const JRT = new Token(
  SupportedChainId.MAINNET,
  '0x8a9c67fee641579deba04928c4bc45f66e26343a',
  18,
  'JRT',
  'Jarvis Reward Token'
)
export const MEME = new Token(
  SupportedChainId.MAINNET,
  '0xd5525d397898e5502075ea5e830d8914f6f0affe',
  8,
  'MEME',
  'MEME (dontbuymeme.com)'
)
export const YTSLA = new Token(
  SupportedChainId.MAINNET,
  '0x5322a3556f979ce2180b30e689a9436fddcb1021',
  18,
  'yTSLA',
  'yTSLA'
)
export const BEANS = new Token(
  SupportedChainId.MAINNET,
  '0x801f90f81786dc72b4b9d51ab613fbe99e5e4ccd',
  18,
  'BEANS',
  'Happyfarm BEANS'
)
export const BAO = new Token(
  SupportedChainId.MAINNET,
  '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
  18,
  'BAO',
  'BAO (bao.finance)'
)
export const ONEINCH = new Token(
  SupportedChainId.MAINNET,
  '0x111111111117dc0aa78b770fa6a738034120c302',
  18,
  'BAO',
  '1INCH (1inch.exchange)'
)
export const UNI: { [chainId: number]: Token } = {
  [SupportedChainId.MAINNET]: new Token(SupportedChainId.MAINNET, UNI_ADDRESS[1], 18, 'UNI', 'Uniswap'),
  [SupportedChainId.RINKEBY]: new Token(SupportedChainId.RINKEBY, UNI_ADDRESS[4], 18, 'UNI', 'Uniswap'),
  [SupportedChainId.ROPSTEN]: new Token(SupportedChainId.ROPSTEN, UNI_ADDRESS[3], 18, 'UNI', 'Uniswap'),
  [SupportedChainId.GOERLI]: new Token(SupportedChainId.GOERLI, UNI_ADDRESS[5], 18, 'UNI', 'Uniswap'),
  [SupportedChainId.KOVAN]: new Token(SupportedChainId.KOVAN, UNI_ADDRESS[42], 18, 'UNI', 'Uniswap'),
}

export const WETH9_EXTENDED: { [chainId: number]: Token } = {
  ...WETH9,
  [SupportedChainId.OPTIMISM]: new Token(
    SupportedChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.OPTIMISTIC_KOVAN]: new Token(
    SupportedChainId.OPTIMISTIC_KOVAN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.ARBITRUM_ONE]: new Token(
    SupportedChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.ARBITRUM_RINKEBY]: new Token(
    SupportedChainId.ARBITRUM_RINKEBY,
    '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681',
    18,
    'WETH',
    'Wrapped Ether'
  ),
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WETH9_EXTENDED) return WETH9_EXTENDED[this.chainId]
    throw new Error('Unsupported chain ID')
  }

  private static _cachedEther: { [chainId: number]: ExtendedEther } = {}

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedEther[chainId] ?? (this._cachedEther[chainId] = new ExtendedEther(chainId))
  }
}
