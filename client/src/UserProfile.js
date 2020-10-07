import React, { Component } from 'react';
import Avatar from './Components/Avatar/Avatar';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitleSm from './Components/SectionTitle/SectionTitlePostsTitleSm';
import utils from './Components/Utils/utils/utils';
import countries from './config/countries';
import loginCreds from './config/loginCreds';

class UserProfile extends Component {
  componentDidMount() {
    this.props.profileGetByUserId(loginCreds.storageItem.getId());
  }
  render() {
    const getLocation = () => {
      let flag, location;
      flag = utils.location.getFlagByCountry(
        this.props.profileReducer.profileData.location
      );
      location = utils.location.getCodeByCountry(
        this.props.profileReducer.profileData.location
      );
      return `${location} ${flag}`;
    };
    return (
      <div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-3 col-sm-2 col-md-2 col-lg-1 m-0 p-0">
            <Avatar
              src={loginCreds.storageItem.getUsername()}
              style={{ width: 65 }}
            />
          </div>
          <div className="col-9 col-sm-10 col-md-10 col-lg-11 m-0 p-0">
            <div className="user-profile-title">
              <SectionTitle title="gilfoylethegreat" />
            </div>
          </div>
        </div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-3 col-sm-2 col-md-2 col-lg-1 m-0 p-0">&nbsp;</div>
          <div className="col-9 col-sm-10 col-md-10 col-lg-11 m-0 p-0">
            <SectionTitlePostsTitleSm text="User Profile" />
          </div>
        </div>
        <br />
        <p>
          <table className="shadow-sm shadow-sm shadow-sm table table-striped">
            <tr>
              <td>Joined</td>
              <td>
                {this.props.profileReducer.profileData.createdOn
                  ? this.props.profileReducer.profileData.createdOn
                  : 'N/A'}
              </td>
            </tr>
            <tr>
              <td>User Rank</td>
              <td>Newbie {this.props.profileReducer.profileData.level}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>
                {this.props.profileReducer.profileData.location
                  ? getLocation()
                  : 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Votes</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Submissions</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Friends</td>
              <td>0</td>
            </tr>
          </table>
        </p>
      </div>
    );
  }
}

export default UserProfile;
