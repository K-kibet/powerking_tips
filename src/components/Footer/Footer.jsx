import { ArrowUpward, Facebook, Instagram, LinkedIn, Telegram, Twitter, WhatsApp, X, YouTube } from '@mui/icons-material';
import React from 'react';
import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../../assets/logo.png';
import Newsletter from '../Newsletter/Newsletter';
import { socialLinks } from '../../data';

const Footer = () => {
    const handleScroll = (e) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      })}
    return (
        <div className='footer theme'>
            <div className="wrapper">
                <section>
                    <h3><img src={Icon} alt="powerking-icon" /><div>POWERKING TIPS</div></h3>
                    <div className="container">
                        <NavLink to="/" title='healthgen'>HOME</NavLink>
                        <NavLink to="/tips" title='books'>GET TIPS</NavLink>
                        <NavLink to="/blogs" title='contact'>READ BLOGS</NavLink> 
                        <NavLink to="/about" title='contact'>ABOUT US</NavLink>
                    </div>
                </section>
                <section>
                    <h3>USEFUL LINKS</h3>
                    <div className="container">
                        <NavLink to="/login" title='login'>LOGIN</NavLink>
                        <NavLink to="/register" title='register'>REGISTER</NavLink>
                        <NavLink to="/pay" title='get vip'>UPGRADE TO VIP</NavLink>
                        <NavLink to="https://web.telegram.org/k/#@Power_predict" title='inbox admin' target='_blank'>CHAT WITH ADMIN</NavLink>
                    </div>
                </section>
                <section>
                    <Newsletter />
                    <div className='social'>
                <h2>Follow us</h2>
                <div className='wrapper'>
                    <Link to={socialLinks.telegramChannel}  title='@powerkingtips' target='_blank' className="telegram">
                        <Telegram />
                        <div className="tooltip">Telegram</div>
                    </Link>
                    <Link to={socialLinks.whatsappChannel} title='whatsapp' target='_blank' className="whatsapp">
                        <WhatsApp />
                        <div className="tooltip">Whatsapp</div>
                    </Link>
                    <Link to={socialLinks.facebookPage} title='facebook' target='_blank' className="facebook">
                        <Facebook />
                        <div className=" tooltip">Facebook</div>
                    </Link>
                    <Link to={socialLinks.xPage} title='x' target='_blank' className="x">
                        <X />
                        <div className="tooltip">X(Twitter)</div>
                    </Link>
                    <Link to={socialLinks.instagramPage} title='instagram' target='_blank' className="instagram">
                        <Instagram />
                        <div className="tooltip">Instagram</div>
                    </Link>
                </div >
                
                    </div>
                </section>
            </div>
            <hr />
            <div className='footer-bottom theme'>
                <p>&copy; POWERKING TIPS {new Date().getFullYear()}</p>
                <Link to={'/about#faq'} title='what people ask'>FAQ</Link>
                <button className="btn-top" onClick={() => handleScroll()}><ArrowUpward/></button>
            </div>
        
        </div>
    );
}

export default Footer;
