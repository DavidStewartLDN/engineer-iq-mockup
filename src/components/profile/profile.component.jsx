import React from 'react';

import './profile.styles.scss'

import Placeholder from '../../assets/placeholder.png';

const Profile = ({title, imageUrl, description, email}) => (
  <div className='profile-card'>
    <div className='profile-image'>
      <img className='profile' alt='Profile image' src={Placeholder} />
    </div>
    <div className='content'>
      <h1 className='title'> {title.toUpperCase()} </h1>
      <span className='description'> {description} </span>
      <a href={"mailto:" + email} className='email'> {email} </a>
    </div>
  </div>
)

export default Profile;