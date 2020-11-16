import React from 'react';

import './servicespage.styles.scss'

import ServicesPlaceholder from '../../assets/services_placeholder.png';

const ServicesPage = () => (
  <div className='services-container'>
    <img className='placeholder' alt='Services offered' src={ServicesPlaceholder} />
  </div>
)

export default ServicesPage;
