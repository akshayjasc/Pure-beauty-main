import React from 'react';
import IconLink from '../Buttons/IconLink';
import logo from '../../img/logo.svg';
import './style.css'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className="d-flex justify-content-between align-items-center">
          <IconLink icon="shop" text="Shop" position="left" />
          <img src={logo} alt='logo' />
          <IconLink icon="login" text="Login" position="right" />
        </div>
      </div>
    </header>
  );
}

export default Header;
