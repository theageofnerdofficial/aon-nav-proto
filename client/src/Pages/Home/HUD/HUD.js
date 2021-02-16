// Imports:
import React, { Component } from 'react';
import QuesProgress from './HUDItems/QuesProgress';
import QuesTimeLeft from './HUDItems/QuesTimeLeft';
import settings from '../../../config/settings';

class HUD extends Component {
  render() {
    return (
      <div
        className={`hud-text ${
          settings.debug.guidelines ? 'guidelines' : null
        }`}
      >
        <div className="col-12 m-0 p-0 row text-center">
          <QuesProgress settings={settings} />
          <QuesTimeLeft settings={settings} />
        </div>
      </div>
    );
  }
}

export default HUD;
