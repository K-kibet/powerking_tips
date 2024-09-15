import React, { useLayoutEffect, useState } from 'react'
import './Ticket.scss';
import { AutoFixHigh, CheckCircle, PaymentSharp, Wallet } from '@mui/icons-material';
//import CardPayment from '../../components/Payments/CardPayment';
import CryptoPayment from '../../components/Payments/CryptoPayment';
import PayButton from '../../components/PayButton';
import CardPayment from '../../components/Payments/CardPayment';

export default function Ticket() {
  const [option, setOption] = useState('crypto')
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className='selected-payment'>
      <div className="radio-buttons">
        <label className="custom-radio" onClick={() => setOption('visa')}>
          <input type="radio" name="radio"/>
          <span className="radio-btn"
            >
            <CheckCircle className='icon'/>
            <div className="hobbies-icon">
              <PaymentSharp className='icon'/>
              <h3>Other</h3>
            </div>
          </span>
        </label>

        <label className="custom-radio" onClick={() => setOption('crypto')}>
          <input type="radio" name="radio" />
          <span className="radio-btn"
            >
            <CheckCircle className='icon'/>
            <div className="hobbies-icon">
              <AutoFixHigh className='icon'/>
              <h3>Crypto</h3>
            </div>
          </span>
        </label>
      </div>
      {
        (option === 'crypto') ? <CryptoPayment /> : <CardPayment />
      }
    </div>
  )
}
