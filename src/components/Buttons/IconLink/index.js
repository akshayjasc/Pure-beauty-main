import { Icon } from '@iconify/react';
import loginIcon from '../../../img/login-icon.svg';
import './styles.css';

const IconLink = ({ icon, text, position }) => {
  const iconName =
    icon === 'shop' ? (
      <Icon icon="heroicons:shopping-bag" />
    ) : (
      <img src={loginIcon} alt="Login Icon" />
    );

  return (
    <a href="/" className={`icon-link ${position}`}>
      {position === 'left' && iconName}
      {text}
      {position === 'right' && iconName}
    </a>
  );
};

export default IconLink;
