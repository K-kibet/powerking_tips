import React from 'react'
import './AppHead.scss'
import {useNavigate } from 'react-router-dom';

import Daily from '../../assets/daily.png';
import Weekly from '../../assets/weekly.png';
import Monthly from '../../assets/mothly.png';

export default function AppHead() {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate('/pay')
   }
  return (
<div className="tournee">
<div className="ticket">
   <div className="img-ticket">
      <img className="img" src={Daily}/>
   </div>
   <div className="title-ticket">Daily Sure VIP</div>
   <div className="date-ticket">$30 - 1 day</div>
   <div className="desc-ticket">Access VIP predictions for 24 hours, perfect for short-term bettors looking for immediate insights.</div>
   <button onClick={handleClick} className="buy-ticket">Subscibe</button>
</div>
<div className="ticket">
   <div className="img-ticket">
      <img className="img" src={Weekly}/>
   </div>
   <div className="title-ticket">Weekly VIP</div>
   <div className="date-ticket">$70 - 7 days</div>
   <div className="desc-ticket">Enjoy a full week of VIP predictions with exclusive tips and detailed match analysis.</div>
   <button onClick={handleClick} className="buy-ticket">Subscribe</button>
</div>
<div className="ticket">
   <div className="img-ticket">
      <img className="img" src={Monthly}/>
   </div>
   <div className="title-ticket">Monthly VIP</div>
   <div className="date-ticket">$100 - 1 month</div>
   <div className="desc-ticket">Get unlimited VIP access for a month, ensuring consistent, high-quality predictions throughout the season.</div>
   <button onClick={handleClick}  className="buy-ticket">Subscribe</button>
</div>

</div>
  )
}
