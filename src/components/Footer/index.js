import logo from '../../img/logo-light.svg'
import { Icon } from '@iconify/react';
import './style.css'

const Footer = () => {
  return (
    <footer className='dark-bg'>
      <div className='container'>
        <div className='row '>
          <div className='col-md-7'>
            <img src={logo} alt='logo' />
          </div>
          <div className='col-md-5'>
            <div className='row'>
                <div className='col-md-6'>
                  <h4>ADDRESS</h4>
                  <p className='text-small'>13 Brinkley Circuit Palmerston</p>
                </div>
                <div className='col-md-6'>
                  <h4>SOCIAL MEDIA</h4>
                  <Icon icon="mdi:instagram" />
                  <Icon icon="ri:facebook-fill" />
                </div>
            </div>
          </div>
        </div>
        <div className='row footer-bottom'>
        <div className='col-lg-7 col-md-6'>
            <p>© 2022 PURE BEAUTY. POWERED BY<span>Planetmedia</span></p>
          </div>
          <div className='col-lg-5 col-md-6 text-end'>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
        </div>
         
      </div>
    </footer>
  );
}

export default Footer;
