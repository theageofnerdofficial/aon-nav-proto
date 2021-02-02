import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';
import TwitchStatus from './TwitchStatus';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{ zIndex: '999' }}>
        <div className="m-0 p-0 col-12 row">
          <TwitchStatus FontIcon={FontIcon} />
          <div className="bg-white m-0 p-0 col-6">
            <div className="pr-4 text-muted text-right font-weight-light">
              &copy; The Age of Nerd {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
