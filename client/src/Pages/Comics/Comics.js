import React, { Component } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import settings from '../../config/settings';

class Comics extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.comics}
          title="Comics"
        />
      </div>
    );
  }
}

export default Comics;
