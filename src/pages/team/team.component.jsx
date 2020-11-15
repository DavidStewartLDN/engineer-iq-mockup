import React from 'react';

import './team.styles.scss'

import Profile from '../../components/profile/profile.component'

class Team extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'ANDREW LYONS',
          imageUrl: '',
          id: 1,
          description: 'Andrew is a Process & Project Management Consultant. He specialises in high performing, carbon neutral, zero waste designs. Etc.',
          email: 'andrew.lyons@engineeriq.co.uk'
        },
        {
          title: 'RICHARD PETTIFOR',
          imageUrl: '',
          id: 2,
          email: 'richard.pettifor@engineeriq.co.uk'
        },
        {
          title: 'BILL KIRKLAND',
          imageUrl: '',
          id: 3,
          email: 'bill.kirkland@engineeriq.co.uk'
        }
      ]
    }
  }

  // Using otherSectionProps allows us to unpack props to the the same
  // named variables.
  render() {
    return (
      <div className='team-menu'>
        {this.state.sections.map(({id, ...otherSectionProps }) => (
            <Profile key= {id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Team