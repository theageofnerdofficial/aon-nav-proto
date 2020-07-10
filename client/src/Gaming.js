import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class Gaming extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.gaming.modern}
          title="Gaming"
        />
      </div>
    );
  }
}

export default Gaming;
