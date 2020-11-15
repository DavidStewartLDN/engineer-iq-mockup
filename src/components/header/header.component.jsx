import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/icon.png';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img className='logo' alt='Engineer iQ Logo' src={Logo} />
    </Link>
    <div className='options'>
      <Link className='option' to='/approach'>
        Our Approach
      </Link>
      <Link className='option' to='/team'>
        The Team
      </Link>
      <Link className='option' to='/services'>
        Services
      </Link>
      <Link className='option' to='/studies'>
        Case Studies
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
    </div>
  </div>
)

export default Header