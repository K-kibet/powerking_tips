import React from 'react'
import './CryptoPayment.scss'


export default function CryptoPayment() {
  return (
<div className="crypto-payment">

<h1>Choose Your Crypto Payment</h1>

<form id="paymentForm">

    <div className="crypto-select">

        <label for="cryptoCurrency">Choose Cryptocurrency:</label>

        <select id="cryptoCurrency" name="cryptoCurrency">

            <option value="Bitcoin">Bitcoin (BTC) <img src="https://boxcoin.dev/demo/admin/media/icon-btc.svg" /></option>

            <option value="Ethereum">Ethereum (ETH) <img src="https://boxcoin.dev/demo/admin/media/icon-eth.svg" /></option>

            <option value="USDT-ERC20">Tether (USDT - ERC20) <img src="https://boxcoin.dev/demo/admin/media/icon-usdt.svg" /></option>

            <option value="USDT-TRC20">Tether (USDT - TRC20)</option>

            <option value="BNB">Binance Coin (BNB)</option>

            <option value="XRP">Ripple (XRP)</option>

            <option value="Cardano">Cardano (ADA)</option>

            <option value="Solana">Solana (SOL)</option>

            <option value="Dogecoin">Dogecoin (DOGE) <img src="https://boxcoin.dev/demo/admin/media/icon-doge.svg" /></option>

            <option value="Polkadot"> Polkadot (DOT)</option>

        </select>
    </div>

    <div className="txid-input">

        <label for="txid">Transaction ID (TXID):</label>

        <input type="text" id="txid" name="txid" placeholder="Enter your TXID" required />

    </div>

    <div className="amount-input">

        <label for="amount">Amount:</label>

        <input type="number" id="amount" name="amount" placeholder="Enter amount" required />

    </div>
    <div className="btn" type='submit'>Pay</div>

</form>

<div id="successMessage" >Your payment has been received. Thank you!</div>

</div>
  )
}
