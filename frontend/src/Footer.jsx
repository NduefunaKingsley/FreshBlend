import { Link } from 'react-router-dom'
import Logo from './assets/images/navbar/Logo.svg'
import Icon1 from './assets/images/footer/Icon1.svg'
import Icon2 from './assets/images/footer/Icon2.svg'
import Icon3 from './assets/images/footer/Icon3.svg'

export default function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className='footer-container'>
          <div className='logo foot'>
            <div className='foot-header'>
              <img src={Logo} className='foot-img' />
              <h2 className='foot-head'>Fresh Blend</h2>
            </div>
            <p className='foot-text'>
              Fresh smoothies made to order with premium ingredients.
            </p>
          </div>
          <div className='links foot'>
            <div className='foot-header'>
              <h2 className='foot-head'>Quick Links</h2>
            </div>
            <p className='foot-text list'><Link to='#' className='quick-links'>Menu</Link> </p>
            <p className='foot-text list'><Link to='#' className='quick-links'>About</Link></p>
            <p className='foot-text list'><Link to='#' className='quick-links' >Contacts</Link></p>
          </div>
          <div className='support foot'>
            <div className='foot-header'>
              <h2 className='foot-head'>Support </h2>
            </div>
            <p className='foot-text list'><Link to='#' className='quick-links' >Contact Us</Link></p>
            <p className='foot-text list'><Link to='#' className='quick-links' >FAQ</Link></p>
            <p className='foot-text list'><Link to='#' className='quick-links' >Terms and Conditions</Link></p>
          </div>
          <div className='follow foot'>
            <div className='foot-header'>
              <h2 className='foot-head'>Follow Us</h2>
            </div>
            <div className='footer-icons'>
              <img src={Icon1} className='foot-icon' />
              <img src={Icon2} className='foot-icon' />
              <img src={Icon3} className='foot-icon' />
            </div>
          </div>
        </div>
        <hr />
        <p className='copywrite'>© 2024 FreshBlend. All rights reserved.</p>
      </footer>
    </div>
  )
}
