import React, { Component } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import settings from '../../config/settings';

class TVFilm extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.tvfilm}
          title="TV/Film"
        />
      </div>
    );
  }
}

export default TVFilm;
