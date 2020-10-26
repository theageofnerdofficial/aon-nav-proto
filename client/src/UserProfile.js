import React, { Component } from 'react';
import Avatar from './Components/Avatar/Avatar';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitleSm from './Components/SectionTitle/SectionTitlePostsTitleSm';
import format from './config/format';
import labels from './config/labels';
import utils from './Components/Utils/utils/utils';

let check = false;
let url;

class UserProfile extends Component {
  componentDidMount() {
    let userIdFromUrl = window.location.href.split('profile/')[1];
    this.props.profileDataReset();
    this.props.profileGetByUserId(userIdFromUrl);
    url = userIdFromUrl;
  }
  componentDidUpdate() {
    let userIdFromUrl = window.location.href.split('profile/')[1];
    if (userIdFromUrl !== url && !check) {
      this.props.profileGetByUserId(userIdFromUrl);
      check = true;
    }
  }
  componentWillUnmount() {
    window.location.reload();
  }
  render() {
    const { location } = utils;
    const { profileReducer } = this.props;
    const { ui } = labels;

    /* Get access level label.
       E.g. level 0 = "Banned":
     ******************************************/
    const getAccessLevelLabel = () => {
      let label;
      if (profileReducer.profileData) {
        label = format.user.labelFromAccessLevel(
          profileReducer.profileData.accessLevel
        );
      }
      return label && label.length ? ` (${label})` : null;
    };

    /* Get joined date — in a nice format:
     ******************************************/
    const getJoinedDate = () => {
      return profileReducer.profileData.createdOn
        ? format.time.formatReadable(profileReducer.profileData.createdOn)
        : ui.general.notAvailable;
    };

    /* Get user location w/ country code & flag:
     ******************************************/
    const getLocation = () => {
      return `${location.getCodeByCountry(
        profileReducer.profileData.location
      )} ${location.getFlagByCountry(profileReducer.profileData.location)}`;
    };
    return (
      <div>
        <div
          className="col-12 m-0 p-0 row"
          style={{ display: profileReducer.profileData ? null : 'none' }}
        >
          <div className="col-3 col-sm-2 col-md-2 col-lg-1 m-0 p-0">
            <Avatar
              src={profileReducer.profileData.username}
              style={{ width: 65 }}
            />
          </div>
          <div className="col-9 col-sm-10 col-md-10 col-lg-11 m-0 p-0">
            <div className="user-profile-title">
              <SectionTitle title={profileReducer.profileData.username} />
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
              <td>{getJoinedDate()}</td>
            </tr>
            <tr>
              <td>User Rank</td>
              <td>
                Newbie
                {getAccessLevelLabel()}
              </td>
            </tr>
            <tr>
              <td>Location</td>
              <td>
                {profileReducer.profileData.location
                  ? getLocation()
                  : ui.general.notAvailable}
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
