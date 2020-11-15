import React from 'react';

import './homepage.styles.scss'

import EngineerIqProcess from '../../assets/EngineerIqProcess.png';

const HomePage = () => (
  <div className='homepage'>
    <text> BUSINESS CONSULTING SERVICE TO THE FOOD & DRINKS INDUSTRY FOR LARGE & SMALL PROJECTS</text>
    <text>OUR PROCESS TO DRIVE CHANGE & PERFORMANCE IMPROVEMENT</text>
    <img className='engineerIqProcess' alt='Engineer iQ Process' src={EngineerIqProcess} />
    <text>We provide independent advice to food and drink businesses to assist them with developing or improving their process & operations. Our focus is on carbon neutral solutions and zero waste operations. Our team offers conceptual design, performance improvement and project support services. Our design expertise covers Automation, Process & Utilities, Manufacturing Operations, Equipment Selection & Project Planning. Backed up by over 80 years working experience in Dairy, Food, Beverage & Brewing.
    </text>
  </div>
);

export default HomePage;