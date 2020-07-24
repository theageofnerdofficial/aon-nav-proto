import React, { Component } from 'react';
import settings from './config/settings';
import SectionTitle from './Components/SectionTitle/SectionTitle';

class MyNerd extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.mynerd}
          title="My Nerd"
        />
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
