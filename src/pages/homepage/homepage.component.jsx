import React from 'react';

import './homepage.styles.scss'

import Landing from '../../assets/landing.png';

const HomePage = () => (
  <div className='homepage'>
    <h1> BUSINESS CONSULTING SERVICE TO THE FOOD & DRINKS INDUSTRY FOR LARGE & SMALL PROJECTS</h1>
    <img className='landing' alt='Engineer iQ services' src={Landing} />
    <h2>We provide independent advice to food and drink businesses to assist them with developing or improving their process & operations. Our focus is on carbon neutral solutions and zero waste operations. Our team offers conceptual design, performance improvement and project support services. Our design expertise covers Automation, Process & Utilities, Manufacturing Operations, Equipment Selection & Project Planning. Backed up by over 80 years working experience in Dairy, Food, Beverage & Brewing.
    </h2>
  </div>
);

export default HomePage;