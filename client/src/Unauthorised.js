// Imports:
import React, { Component } from 'react';
import SectionNotice from './Components/SectionTitle/SectionNotice';
import SectionTitlePostsNotice from './Components/SectionTitle/SectionTitlePostsNotice';

class Unauthorised extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
          <SectionNotice title="Unauthorised access" />
          <SectionTitlePostsNotice text="Sorry you do not have permission to be here" />
          <br />
          <div className="text-center">
            <img
              alt="Dennis Nedry lockout screen from Jurassic Park"
              className="rounded"
              src="img/unauthorised2.gif"
              style={{ opacity: 0.9, transform: 'scale(0.9)' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Unauthorised;
