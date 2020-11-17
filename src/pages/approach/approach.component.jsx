import React from 'react';

import './approach.styles.scss'

import EngineerIqProcess from '../../assets/EngineerIqProcess.png';
import Process2 from '../../assets/process.png';

const Approach = () => (
  <div className='homepage'>
    <h1>OUR PROCESS TO DRIVE CHANGE & PERFORMANCE IMPROVEMENT</h1>
    <img className='engineerIqProcess' alt='Engineer iQ Process 1' src={EngineerIqProcess} />
    <img className='engineerIqProcess' alt='Engineer iQ Process 2' src={Process2} />
  </div>
);

export default Approach;