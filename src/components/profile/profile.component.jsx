import React from 'react';

import './profile.styles.scss'

const Profile = ({title, imageUrl, description, email}) => (
  <div 
    className={'menu-item'}
  >
  <div
    className='background-image'
      />
      <div className='content'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <span className='description'> {description} </span>
        <span className='email'> {email} </span>
      </div>
  </div>
)

// With router will provide us access to the location, match and history
// props that we need access to.
export default Profile;