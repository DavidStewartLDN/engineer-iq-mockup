import React from 'react';

import './contactpage.styles.scss'

const ContactPage = () => (
  <div className='contact-container'>
    <div className='services-box'>
      <h3 className='box'> Consultancy Rates <br/> RFQ Development <br/> Bid Qualification <br/> Troubleshooting</h3>
      <a href={"mailto:sales@engineeriq.co.uk"} className='email'> sales@engineeriq.co.uk </a>
    </div>
    <div className='services-box'>
      <h3 className='box'> Discuss our process <br/> Checkout out our skills <br/> Resources & <br/> Experience </h3>
      <a href={"mailto:info@engineeriq.co.uk "} className='email'> info@engineeriq.co.uk </a>
    </div>
    <div className='services-box'>
      <h3 className='box'><br/> Payment Queries <br/> Invoice Queries <br/><br/> </h3>
      <a href={"mailto:accounts@engineeriq.co.uk"} className='email'> accounts@engineeriq.co.uk </a>
    </div>
  </div>
)

export default ContactPage;