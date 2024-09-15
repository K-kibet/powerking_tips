import React from 'react'
import './Flyer.scss'
import PayButton from '../PayButton';
import Image from '../../assets/bg_vid.mp4'

export default function Flyer() {
  return (
    <div className='flyer'>
          <video className='background' autoPlay loop muted>
            <source src={Image} type='video/mp4' />
          </video>
          <h1>Unlock exclusive VIP predictions—boost your winnings today!</h1>
          <h2>Win big anywhere you are with Expert Football Predictions</h2>
          <PayButton text='Become A Member'/>
    </div>
  )
}
