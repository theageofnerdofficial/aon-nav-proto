import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class Film extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.film}
          title="Film"
        />
      </div>
    );
  }
}

export default Film;
