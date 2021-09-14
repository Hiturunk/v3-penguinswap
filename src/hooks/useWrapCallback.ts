import { Currency } from '@uniswap/sdk-core'
import { useMemo } from 'react'
import { WETH9_EXTENDED, SHRIMP, UNITOKEN, CRAB, COMP, TORI, ADAI } from '../constants/tokens'
import { tryParseAmount } from '../state/swap/hooks'
import { useTransactionAdder } from '../state/transactions/hooks'
import { useCurrencyBalance } from '../state/wallet/hooks'
import { useActiveWeb3React } from './web3'
import {
  useWETHContract,
  useWUNIContract,
  useUniContract,
  useTORIContract,
  useCRABContract,
  useCOMPContract,
  useADAIContract,
} from './useContract'
import { MaxUint256 } from '@ethersproject/constants'
export enum WrapType {
  NOT_APPLICABLE,
  WRAP,
  UNWRAP,
}
import BN from 'bn.js'
const NOT_APPLICABLE = { wrapType: WrapType.NOT_APPLICABLE }
/**
 * Given the selected input and output currency, return a wrap callback
 * @param inputCurrency the selected input currency
 * @param outputCurrency the selected output currency
 * @param typedValue the user input value
 */
export default function useWrapCallback(
  inputCurrency: Currency | undefined | null,
  outputCurrency: Currency | undefined | null,
  typedValue: string | undefined
): { wrapType: WrapType; execute?: undefined | (() => Promise<void>); inputError?: string } {
  const { chainId, account } = useActiveWeb3React()
  const wethContract = useWETHContract()
  const wuniContract = useWUNIContract()
  const uniContract = useUniContract()
  const toriContract = useTORIContract()
  const crabContract = useCRABContract()
  const compContract = useCOMPContract()
  const adaiContract = useADAIContract()
  const balance = useCurrencyBalance(account ?? undefined, inputCurrency ?? undefined)
  // we can always parse the amount typed as the input currency, since wrapping is 1:1
  const inputAmount = useMemo(() => tryParseAmount(typedValue, inputCurrency ?? undefined), [inputCurrency, typedValue])
  const addTransaction = useTransactionAdder()

  return useMemo(() => {
    if (!wethContract || !chainId || !inputCurrency || !outputCurrency) return NOT_APPLICABLE
    const weth = WETH9_EXTENDED[chainId]
    const shrimp = SHRIMP
    const uni = UNITOKEN
    const crab = CRAB
    const comp = COMP
    const tori = TORI
    const adai = ADAI
    if (!weth) return NOT_APPLICABLE

    const hasInputAmount = Boolean(inputAmount?.greaterThan('0'))
    const sufficientBalance = inputAmount && balance && !balance.lessThan(inputAmount)

    if (inputCurrency.isNative && weth.equals(outputCurrency)) {
      return {
        wrapType: WrapType.WRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  const txReceipt = await wethContract.deposit({ value: `0x${inputAmount.quotient.toString(16)}` })
                  addTransaction(txReceipt, { summary: `Wrap ${inputAmount.toSignificant(6)} ETH to WETH` })
                } catch (error) {
                  console.error('Could not deposit', error)
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : hasInputAmount ? 'Insufficient ETH balance' : 'Enter ETH amount',
      }
    } else if (weth.equals(inputCurrency) && outputCurrency.isNative) {
      return {
        wrapType: WrapType.UNWRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  const txReceipt = await wethContract.withdraw(`0x${inputAmount.quotient.toString(16)}`)
                  addTransaction(txReceipt, { summary: `Unwrap ${inputAmount.toSignificant(6)} WETH to ETH` })
                } catch (error) {
                  console.error('Could not withdraw', error)
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : hasInputAmount ? 'Insufficient WETH balance' : 'Enter WETH amount',
      }
    } else if (uni.equals(inputCurrency) && shrimp.equals(outputCurrency)) {
      return {
        wrapType: WrapType.WRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  if (
                    (await uniContract!.allowance(account, SHRIMP.address)).lte(
                      new BN(inputAmount.quotient.toString(16), 16)
                    )
                  ) {
                    const txReceipt1 = await uniContract!.approve(SHRIMP.address, MaxUint256)
                    addTransaction(txReceipt1, { summary: `Approve ${inputAmount.toSignificant(6)} Uni to 🦐` })
                  }
                  const txReceipt = await wuniContract!.wrap(`0x${inputAmount.quotient.toString(16)}`)
                  addTransaction(txReceipt, { summary: `Wrap ${inputAmount.toSignificant(6)} Uni to 🦐` })
                } catch (error) {
                  console.error('Could not deposit', error)
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : 'Insufficient UNI balance',
      }
    } else if (shrimp.equals(inputCurrency) && uni.equals(outputCurrency)) {
      return {
        wrapType: WrapType.UNWRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  const txReceipt = await wuniContract!.unwrap(`0x${inputAmount.quotient.toString(16)}`)
                  addTransaction(txReceipt, { summary: `Unwrap ${inputAmount.toSignificant(6)} 🦐 to UNI` })
                } catch (error) {
                  console.error('Could not withdraw', error)
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : 'Insufficient 🦐 balance',
      }
    } else if (comp.equals(inputCurrency) && crab.equals(outputCurrency)) {
      return {
        wrapType: WrapType.WRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  if (
                    (await uniContract!.allowance(account, SHRIMP.address)).lte(
                      new BN(inputAmount.quotient.toString(16), 16)
                    )
                  ) {
                    const txReceipt1 = await compContract!.approve(CRAB.address, MaxUint256)
                    addTransaction(txReceipt1, { summary: `Approve ${inputAmount.toSignificant(6)} COMP to 🦀️` })
                  }
                  const txReceipt = await compContract!.wrap(`0x${inputAmount.quotient.toString(16)}`)
                  addTransaction(txReceipt, { summary: `Wrap ${inputAmount.toSignificant(6)} COMP to 🦀️` })
                } catch (error) {
                  console.error('Could not deposit', error)
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : 'Insufficient COMP balance',
      }
    } else if (crab.equals(inputCurrency) && comp.equals(outputCurrency)) {
      return {
        wrapType: WrapType.UNWRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  const txReceipt = await crabContract!.unwrap(`0x${inputAmount.quotient.toString(16)}`)
                  addTransaction(txReceipt, { summary: `Unwrap ${inputAmount.toSignificant(6)} 🦀️ to COMP` })
                } catch (error) {
                  console.error('Could not withdraw', error)
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : 'Insufficient 🦀️ balance',
      }
    } else if (adai.equals(inputCurrency) && tori.equals(outputCurrency)) {
      return {
        wrapType: WrapType.WRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  if (
                    (await adaiContract!.allowance(account, TORI.address)).lte(
                      new BN(inputAmount.quotient.toString(16), 16)
                    )
                  ) {
                    const txReceipt1 = await adaiContract!.approve(TORI.address, MaxUint256)
                    addTransaction(txReceipt1, { summary: `Approve ${inputAmount.toSignificant(6)} Uni to 🦐` })
                  }
                  const txReceipt = await toriContract!.wrap(`0x${inputAmount.quotient.toString(16)}`)
                  addTransaction(txReceipt, { summary: `Wrap ${inputAmount.toSignificant(6)} ADAI to ⛩️` })
                } catch (error) {
                  console.error('Could not deposit', error)
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : 'Insufficient ADAI balance',
      }
    } else if (tori.equals(inputCurrency) && adai.equals(outputCurrency)) {
      return {
        wrapType: WrapType.UNWRAP,
        execute:
          sufficientBalance && inputAmount
            ? async () => {
                try {
                  const txReceipt = await toriContract!.unwrap(`0x${inputAmount.quotient.toString(16)}`)
                  addTransaction(txReceipt, { summary: `Unwrap ${inputAmount.toSignificant(6)} ⛩️ to ADAI` })
                } catch (error) {
                  console.error('Could not withdraw', error)
                }
              }
            : undefined,
        inputError: sufficientBalance ? undefined : 'Insufficient ⛩️ balance',
      }
    } else {
      return NOT_APPLICABLE
    }
  }, [wethContract, chainId, inputCurrency, outputCurrency, inputAmount, balance, addTransaction])
}
