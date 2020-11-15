import React from 'react';

import './contactpage.styles.scss'

const ContactPage = () => (
  <div className='services-container'>
    <div className='services-box'>
      <h1 className='box'> Consultancy Rates </h1>
      <a href={"mailto:sales@engineeriq.co.uk"} className='email'> sales@engineeriq.co.uk </a>
    </div>
    <div className='services-box'>
      <h1 className='box'> Discuss our process </h1>
      <a href={"mailto:info@engineeriq.co.uk "} className='email'> info@engineeriq.co.uk </a>
    </div>
    <div className='services-box'>
      <h1 className='box'> Payment Queries </h1>
      <a href={"mailto:accounts@engineeriq.co.uk"} className='email'> accounts@engineeriq.co.uk </a>
    </div>
  </div>
)

export default ContactPage;