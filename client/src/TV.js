import React, { Component } from 'react';
import settings from './config/settings';
import SectionTitle from './Components/SectionTitle/SectionTitle';

class TV extends Component {
  render() {
    return (
      <div>
        <SectionTitle tabColour={settings.ui.style.sectionTab.tv} title="TV" />
      </div>
    );
  }
}

export default TV;
