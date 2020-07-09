import React, { Component } from 'react';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import settings from './config/settings';

class BoardGames extends Component {
  render() {
    return (
      <div>
        <SectionTitle
          title="Board Gaming"
          tabColour={settings.ui.style.sectionTab.gaming.board}
        />
        <p>Roll the dice, Bertha...</p>
      </div>
    );
  }
}

export default BoardGames;
