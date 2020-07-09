import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class Gaming extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          title="Gaming"
          tabColour={settings.ui.style.sectionTab.gaming.modern}
        />
      </div>
    );
  }
}

export default Gaming;
