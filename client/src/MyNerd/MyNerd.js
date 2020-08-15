import React, { Component } from 'react';
import countries from '../config/countries';
import settings from '../config/settings';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import SelectionArea from './SelectionArea';

class MyNerd extends Component {
  getFlag = (country) => countries.map((e) => e.name).indexOf(country);

  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.mynerd}
          title="My Nerd"
        />
        <SelectionArea
          nerdReducer={this.props.nerdReducer}
          nerdUpdateCheck={this.props.nerdUpdateCheck}
        />
      </div>
    );
  }
}

export default MyNerd;
