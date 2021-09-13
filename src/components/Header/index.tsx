import { Trans } from '@lingui/macro'
import useScrollPosition from '@react-hook/window-scroll'
import { CHAIN_INFO, SupportedChainId } from 'constants/chains'
import { darken } from 'polished'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Text } from 'rebass'
import { useShowClaimPopup, useToggleSelfClaimModal } from 'state/application/hooks'
import { useUserHasAvailableClaim } from 'state/claim/hooks'
import { useUserHasSubmittedClaim } from 'state/transactions/hooks'
import { useDarkModeManager } from 'state/user/hooks'
import { useETHBalances } from 'state/wallet/hooks'
import styled from 'styled-components/macro'
import Logo from '../../assets/svg/logo_simple.svg'
import LogoDark from '../../assets/svg/logo_simple.svg'
import { useActiveWeb3React } from '../../hooks/web3'
import { ExternalLink, TYPE } from '../../theme'
import ClaimModal from '../claim/ClaimModal'
import { CardNoise } from '../earn/styled'
import Menu from '../Menu'
import Modal from '../Modal'
import Row from '../Row'
import RowFixed from '../Row'
import { Dots } from '../swap/styleds'
import Web3Status from '../Web3Status'
import NetworkCard from './NetworkCard'
import UniBalanceContent from './UniBalanceContent'

const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  padding: 0.5rem;
  z-index: 21;
  position: relative;

  /* Background slide effect on scroll. */
  background-image: ${({ theme }) => `linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`}
  background-position: ${({ showBackground }) => (showBackground ? '0 -100%' : '0 0')};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.bg2 : 'transparent;')};
  transition: background-position .1s, box-shadow .1s;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding:  1rem;
    grid-template-columns: auto 1fr;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 1rem;
  `}
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    width: 100%;
    max-width: 960px;
    padding: 1rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
    height: 72px;
    border-radius: 12px 12px 0 0;
    background-color: ${({ theme }) => theme.bg1};
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row-reverse;
    align-items: center;
  `};
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
`

const HeaderRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
`

const HeaderLinks = styled(Row)`
  //  background-color: ${({ theme }) => theme.bg0};

  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  overflow: auto;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-self: flex-end;
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg2)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  :focus {
    border: 1px solid blue;
  }
`

const UNIAmount = styled(AccountElement)`
  color: white;
  padding: 4px 8px;
  height: 36px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.bg3};
  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;
`

const UNIWrapper = styled.span`
  width: fit-content;
  position: relative;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.9;
  }
`

const HideSmall = styled.span`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
  :hover {
    cursor: pointer;
  }
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-180deg);
  }
`

const activeClassName = 'ACTIVE'

// Button colours
const clrNeon = 'hsl(317 100% 54%)'
const clrBg = 'hsl(323 21% 16%)'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  ${({ theme }) => theme.flexRowNoWrap}

*,
*::before,
*::after {
  box-sizing: border-box;
}

  font-size: 1.3rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: ${clrNeon};
  border: ${clrNeon} 0.1em solid;
  padding: 0.25em 0.4em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em rgba(255, 255, 255, 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.25em 0 ${clrNeon}, 0 0 0.25em 0 ${clrNeon};
  position: relative;
}

::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 0.05em 0.05em ${clrNeon};
  opacity: 0;
  background-color: ${clrNeon};
  z-index: -1;
  transition: opacity 100ms linear;
}

:hover,
:focus {
  color: ${clrBg};
  text-shadow: none;
}

:hover::before,
:focus::before {
  opacity: 1;
}

:hover::after,
:focus::after {
  opacity: 1;
}
`
// I created an extra styled button to hide it on smaller screen sizes. This is a hack but it works.
const StyledNavLinkHidable = styled(StyledNavLink)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      display: none;
`}
`

const StyledExternalLink = styled(ExternalLink).attrs({
  activeClassName,
})<{ isActive?: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
*,
*::before,
*::after {
  box-sizing: border-box;
}

  font-size: 1.3rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: ${clrNeon};
  border: ${clrNeon} 0.1em solid;
  padding: 0.25em 0.4em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em rgba(255, 255, 255, 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.25em 0 ${clrNeon}, 0 0 0.25em 0 ${clrNeon};
  position: relative;
}

::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 0.05em 0.05em ${clrNeon};
  opacity: 0;
  background-color: ${clrNeon};
  z-index: -1;
  transition: opacity 100ms linear;
}

:hover,
:focus {
  color: ${clrBg};
  text-shadow: none;
}

:hover::before,
:focus::before {
  opacity: 1;
}

:hover::after,
:focus::after {
  opacity: 1;
}
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      display: none;
`}
`

const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg2};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const [darkMode] = useDarkModeManager()

  const toggleClaimModal = useToggleSelfClaimModal()

  const availableClaim: boolean = useUserHasAvailableClaim(account)

  const { claimTxn } = useUserHasSubmittedClaim(account ?? undefined)

  const [showUniBalanceModal, setShowUniBalanceModal] = useState(false)
  const showClaimPopup = useShowClaimPopup()

  const scrollY = useScrollPosition()

  const { infoLink } = CHAIN_INFO[chainId ? chainId : SupportedChainId.MAINNET]
  return (
    <HeaderFrame showBackground={scrollY > 45}>
      <ClaimModal />
      <Modal isOpen={showUniBalanceModal} onDismiss={() => setShowUniBalanceModal(false)}>
        <UniBalanceContent setShowUniBalanceModal={setShowUniBalanceModal} />
      </Modal>
      <Title href=".">
        <UniIcon>
          <img width={'50px'} src={darkMode ? LogoDark : Logo} alt="logo" />
        </UniIcon>
      </Title>
      <HeaderLinks>
        <StyledNavLink id={`swap-nav-link`} to={'/swap'}>
          <Trans>Swap</Trans>
        </StyledNavLink>
        <StyledNavLink
          id={`pool-nav-link`}
          to={'/pool'}
          isActive={(match, { pathname }) =>
            Boolean(match) ||
            pathname.startsWith('/add') ||
            pathname.startsWith('/remove') ||
            pathname.startsWith('/increase') ||
            pathname.startsWith('/find')
          }
        >
          <Trans>Pool</Trans>
        </StyledNavLink>
        {chainId && chainId === SupportedChainId.MAINNET && (
          <StyledNavLink id={`vote-nav-link`} to={'/vote'}>
            <Trans>Vote</Trans>
          </StyledNavLink>
        )}
        <StyledExternalLink id={`charts-nav-link`} href={infoLink}>
          <Trans>Charts</Trans>
        </StyledExternalLink>
        <StyledNavLink id={`stake-nav-link`} to={'/about'}>
          <Trans>About</Trans>
        </StyledNavLink>
      </HeaderLinks>

      <HeaderControls>
        <NetworkCard />
        <HeaderElement>
          {availableClaim && !showClaimPopup && (
            <UNIWrapper onClick={toggleClaimModal}>
              <UNIAmount active={!!account && !availableClaim} style={{ pointerEvents: 'auto' }}>
                <TYPE.white padding="0 2px">
                  {claimTxn && !claimTxn?.receipt ? (
                    <Dots>
                      <Trans>Claiming UNI</Trans>
                    </Dots>
                  ) : (
                    <Trans>Claim UNI</Trans>
                  )}
                </TYPE.white>
              </UNIAmount>
              <CardNoise />
            </UNIWrapper>
          )}
          <AccountElement active={!!account}>
            {account && userEthBalance ? (
              <BalanceText style={{ flexShrink: 0, userSelect: 'none' }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                <Trans>{userEthBalance?.toSignificant(3)} ETH</Trans>
              </BalanceText>
            ) : null}
            <Web3Status />
          </AccountElement>
          <Menu />
        </HeaderElement>
      </HeaderControls>
    </HeaderFrame>
  )
}
