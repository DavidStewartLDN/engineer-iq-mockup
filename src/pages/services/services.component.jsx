import React from 'react';

import './profile.styles.scss'

const Services = () => (
  <div className='services-container'>
    <div className='services-box'>
    <h1 className='text'> Consultancy Rates </h1>
    </div>
    <div className='email'>
      <a href={"mailto:" + email} className='email'> {email} </a>
    </div>
  </div>
)

export default Services;