import React, { useState } from 'react';

import './servicespage.styles.scss'

import Automation from '../../assets/services_images/services_automation.png';
import Operation from '../../assets/services_images/services_operation.png';
import Process from '../../assets/services_images/services_process.png';
import Utilities from '../../assets/services_images/services_utilities.png';

function ServicesPage(){

  const [currentPicture, setCurrentPicture] = useState(Automation)

  console.log(currentPicture)
  return(
    <div className='services-container'>
      <div className='buttons-container'>
        <div className='services-box' onClick={() => setCurrentPicture(Automation)}>
          <h3 className='box'>Automation</h3>
        </div>
        <div className='services-box' onClick={() => setCurrentPicture(Operation)}>
          <h3 className='box'>Operation</h3>
        </div>
        <div className='services-box' onClick={() => setCurrentPicture(Process)}>
          <h3 className='box'>Process</h3>
        </div>
        <div className='services-box' onClick={() => setCurrentPicture(Utilities)}>
          <h3 className='box'>Utilities</h3>
        </div>
      </div>
      <img className='placeholder' alt='Services offered' src={currentPicture} />
    </div>
  );
}

export default ServicesPage;
