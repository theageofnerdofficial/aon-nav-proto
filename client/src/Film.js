import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class Film extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          title="Film"
          tabColour={settings.ui.style.sectionTab.film}
        />
      </div>
    );
  }
}

export default Film;
