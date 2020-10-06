import React, { Component } from 'react';
import Avatar from './Components/Avatar/Avatar';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitleSm from './Components/SectionTitle/SectionTitlePostsTitleSm';
import settings from './config/settings';

class UserProfile extends Component {
  componentDidMount() {
    //
  }
  render() {
    return (
      <div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-md-1 col-2 m-0 p-0">
            <Avatar src="sdsddd" style={{ width: 65 }} />
          </div>
          <div className="col-md-11 col-10 m-0 p-0">
            <SectionTitle title="Someusername" />
          </div>
        </div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-1 m-0 p-0">&nbsp;</div>
          <div className="col-11 m-0 p-0">
            <SectionTitlePostsTitleSm text="User Profile" />
          </div>
        </div>
        <br />
        <p>
          <table className="table table-striped shadow-sm col-8 col-md-6 offset-1 offset-md-1">
            <tr>
              <td>User Rank</td>
              <td>Newbie</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>Flag</td>
            </tr>
            <tr>
              <td>Submissions</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>Flag</td>
            </tr>
          </table>
        </p>
      </div>
    );
  }
}

export default UserProfile;
