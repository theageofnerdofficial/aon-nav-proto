import React, { Component } from 'react';
import settings from './config/settings';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';
import utils from './Components/Utils/utils/utils';
import countries from './config/countries';

class MyNerd extends Component {
  componentDidMount() {
    // if (usersReducer. username... )
    this.props.userAuthenticate();
  }
  getFlag(country) {
    const flag = countries.map((e) => e.name).indexOf(country);
    return flag;
  }
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.mynerd}
          title="My Nerd"
        />
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
        <br />
        <br />
        <br />
        <p style={{ fontWeight: 300 }}>
          Some day you will need to be logged in to see this page
        </p>
        <img
          alt="Funny cat"
          style={{ width: '300px' }}
          src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
        />
      </div>
    );
  }
}

export default MyNerd;
