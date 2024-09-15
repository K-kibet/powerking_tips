import React from 'react'
import './PostDetails.scss';
import Profile from '../../assets/vip.jpg';
import Logo from '../../assets/logo.png';
import { Close, ErrorTwoTone, Verified} from '@mui/icons-material';
import PayButton from '../PayButton';


export default function PostDetail({data}) {
    /*style={{
        display: isActive ? 'block' : 'none'
    }}*/

    const handleClick = () => {
      document.querySelector(".post-detail").classList.remove("active")
    }
  return (
    <div className='post-detail active' >
        <Close className='close' onClick={handleClick}/>
        <div className="detail-header">
            <img src={data.premium ? Profile : Logo} alt="powerkin_vip" />
            <h2>{data.date} - {data.time}</h2>
            <p>English Premier League</p>
        </div>
        <h4>
          odd: {
            data.odd
          }
          {
            data.won ? <h4 className='icon'>Won <Verified className='icon won'/></h4> :  <h4 className='icon'>Lost <ErrorTwoTone className='icon lost'/></h4>
          }
          </h4>
        <hr className="divider"></hr>
        <div className="detail-desc">
          <h4><img src={data.homeImage} alt={data.home} srcset="" />{data.home}</h4>
          <p>{data.results ? data.results.split('-')[0] : "?" }</p>
        </div>
        <div className="divider"></div>
        <div className="detail-desc">
          <h4><img src={data.awayImage} alt={data.away} srcset="" />{data.away}</h4>
          <p>{data.results ? data.results.split('-')[1] : "?" }</p>
        </div>
        <hr className="divider"></hr>
        <div className="detail-btn">
          <button className="btn" disabled>{data.premium ? 'Premium' : `💡${data.pick}`}</button>
          {data.premium && <PayButton text='Get VIP'/>}
        </div>
        <span style={{display:"block", textAlign: "center"}}>        
        <a href="https://intasend.com/security" target="_blank" rel='noreferrer'>
          <img src="https://intasend-prod-static.s3.amazonaws.com/img/trust-badges/intasend-trust-badge-no-mpesa-hr-dark.png" style={{width: "100%"}} alt="IntaSend Secure Payments (PCI-DSS Compliant)"/>
        </a>        
        <strong>
          <a rel='noreferrer' style={{display: "block", color: "#fafafa", textDecoration: "none", fontSize: "0.8em",  marginTop: "0.6em"}} href="https://intasend.com/security" target="_blank">Secured by IntaSend Payments</a>
        </strong>        
      </span>
    </div>
  )
}