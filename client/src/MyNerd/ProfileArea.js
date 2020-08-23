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


{this.props.login.username &&
        this.props.login.username.length > 1 ? (
          <SectionTitlePostsTitle
            text={`${
              this.props.login.location
                ? countries[this.getFlag(this.props.login.location)].flag
                : ''
            } ${this.props.login.username}'s page`}
          />
        ) : (
          ''
        )}

*/}
        <div className="col-lg-8">
          <div className="mynerd-wrapper mt-1">
            <Avatar
              src={
                this.props.login
                  ? this.props.login.id
                    ? this.props.login.id
                    : null
                  : null
              }
              style={{
                margin: 20,
                width: '60px',
              }}
            />
            <br />
            <h5 className="font-weight-light">
              {`${
                this.props.login
                  ? this.props.login.location
                    ? countries[getFlag(this.props.login.location)].flag
                    : ''
                  : null
              }
          ${this.props.login ? this.props.login.username : null}'s page`}
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
