import React from 'react';

import './servicespage.styles.scss'

import Automation from '../../assets/services_images/services_automation.png';

const ServicesPage = () => (
  <div className='services-container'>
    <div className='buttons-container'>
      <div className='services-box'>
        <h3 className='box'> Automation</h3>
      </div>
      <div className='services-box'>
        <h3 className='box'> Operation </h3>
      </div>
      <div className='services-box'>
        <h3 className='box'> Process</h3>
      </div>
      <div className='services-box'>
        <h3 className='box'> Utilities</h3>
      </div>
    </div>
    <img className='placeholder' alt='Services offered' src={Automation} />
  </div>
)

export default ServicesPage;
