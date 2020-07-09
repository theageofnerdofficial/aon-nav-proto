import React, { Component } from 'react';
import settings from './config/settings';
import SectionTitle from './Components/SectionTitle/SectionTitle';

class TV extends Component {
  render() {
    return (
      <div>
        <SectionTitle title="TV" tabColour={settings.ui.style.sectionTab.tv} />
      </div>
    );
  }
}

export default TV;
