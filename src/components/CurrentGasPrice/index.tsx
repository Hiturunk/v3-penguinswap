import React from 'react'
import styled from 'styled-components/macro'
import { TYPE } from '../../theme'

import GasStationLogo from '../../assets/svg/local_gas_station_white_24dp.svg'
let standardGwei = 0

function CurrentGasPrice() {
  const wsUrl = 'wss://www.gasnow.org/ws'
  const webSocket = new WebSocket(wsUrl)
  webSocket.onmessage = function (event) {
    const gasPrices = JSON.parse(event.data)
    standardGwei = Math.round(gasPrices.data.gasPrices.standard / 10 ** 9)
    // console.log(standardGwei)
  }
  if (standardGwei === 0) {
    return (
      <div>
        <img src={GasStationLogo}></img>
      </div>
    )
  } else {
    return (
      <div>
        {standardGwei}
        <img src={GasStationLogo}></img>
      </div>
    )
  }
}

export default CurrentGasPrice
