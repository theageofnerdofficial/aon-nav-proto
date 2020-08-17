import React, { Component } from 'react';

import countries from '../config/countries';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import settings from '../config/settings';
import MyNerdNav from './MyNerdNav';
import Avatar from '../Components/Avatar/Avatar';

class ProfileArea extends Component {
  render() {
    const getFlag = (country) => countries.map((e) => e.name).indexOf(country);
    return (
      <React.Fragment>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.mynerd}
          title="Step 2/3: Your Profile"
        />

        <MyNerdNav
          nerdReducer={this.props.nerdReducer}
          nerdSetupReducer={this.props.nerdSetupReducer}
          nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
        />

        <SectionTitlePostsTitle text="Customize your profile:" />

        {/* 


{this.props.usersReducer.username &&
        this.props.usersReducer.username.length > 1 ? (
          <SectionTitlePostsTitle
            text={`${
              this.props.usersReducer.location
                ? countries[this.getFlag(this.props.usersReducer.location)].flag
                : ''
            } ${this.props.usersReducer.username}'s page`}
          />
        ) : (
          ''
        )}

*/}
        <div className="col-lg-8">
          <div className="mynerd-wrapper mt-1">
            <Avatar
              src={
                this.props.usersReducer.id ? this.props.usersReducer.id : null
              }
              style={{
                width: '60px',
                margin: 20,
              }}
            />
            <br />
            <h5 className="font-weight-light">
              {`${
                this.props.usersReducer.location
                  ? countries[getFlag(this.props.usersReducer.location)].flag
                  : ''
              }
          ${this.props.usersReducer.username}'s page`}
            </h5>

            <table className="table table-striped">
              <tr>
                <td>Theme</td>
                <td>
                  <select className="form-control">
                    <option>Default</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Intro</td>
                <td>
                  <textarea className="form-control"></textarea>
                </td>
              </tr>
              <tr>
                <td>Subscriptions</td>
                <td>
                  <select className="form-control">
                    <option>Public</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Location display</td>
                <td>
                  <select className="form-control">
                    <option>Public</option>
                  </select>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <MyNerdNav
          nerdReducer={this.props.nerdReducer}
          nerdSetupReducer={this.props.nerdSetupReducer}
          nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
        />
      </React.Fragment>
    );
  }
}

export default ProfileArea;
