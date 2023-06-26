import React from 'react';
import darklogo from '../../img/logo.svg';
import lightLogo from '../../img/logo-light.svg';

const Logos = ({ theme }) => {
  const logo = theme === "light" ? lightLogo : darklogo;

  return <img src={logo} alt="pure beauty logo" />;
};

export default Logos;
