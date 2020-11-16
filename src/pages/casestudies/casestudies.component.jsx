import React from 'react';

import './casestudies.styles.scss'

import Companies from '../../assets/companies.png';

const CaseStudiesPage = () => (
  <div className='case-studies-container'>
    <img className='case-studies' alt='Companies worked with' src={Companies} />
    <div className='services-box'>
      <h3 className='box'> 
        Design to Tender<br/>
        RFQ Development<br/>
        Vendor Assessment<br/>
        Equipment Specification<br/>
        Equipment Inspection<br/>
        Factory Acceptance Testing<br/>
        Site surveys<br/>
        Support for Hazop</h3>
    </div>
  </div>
)

export default CaseStudiesPage;
