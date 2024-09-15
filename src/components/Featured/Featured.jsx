import React from 'react'
import './Featured.scss'
import Bitcoins from '../../assets/btc.png';
import Visa from '../../assets/visa.jpg';
import Mastercard from '../../assets/mastercard.png';
import Mpesa from '../../assets/mpesa.png';

export default function Featured() {
  const data = [
    {
      title: "Crypto",
      image: Bitcoins
    },
    {
      title: "Mpesa",
      image: Mpesa
    },
    {
      title: "Visa",
      image: Visa
    },
    {
      title: "Mastercard",
      image: Mastercard
    }
  ]
  return (
    <div className='featured'>
      {
        data.map(item => {
          return  <div className="box">
          <div className="imgBx">
            <img src={item.image} alt={item.title}/>
          </div>
          <h2>{item.title}</h2>
        </div>
        })
      }
    </div>
  )
}
