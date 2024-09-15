import React from 'react'
import './CardPayment.scss';
import PayButton from '../PayButton';

export default function CardPayment() {
  return (
    <div className="card-payment">
        <h1>Make Payment</h1>
        <h2>Make Payment Using:</h2>
        <h4>Apple Pay, Google Pay, Mpesa, Visa, Mastercard, PesaLink</h4>
        <PayButton  text={'Pay VIP'}/>
    </div>
  )
}
