import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <SectionTitle title="Person's Profile" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          porro iste ipsam dignissimos quisquam cum expedita sit recusandae
          ducimus distinctio, tenetur ab eaque consequuntur dolor possimus. Eos
          ex recusandae animi!
        </p>
      </div>
    );
  }
}

export default UserProfile;
