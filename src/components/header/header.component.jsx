import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/icon.png';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/approach'>
        Our Approach
      </Link>
      <Link className='option' to='/team'>
        The Team
      </Link>
    </div>
  </div>
)

export default Header