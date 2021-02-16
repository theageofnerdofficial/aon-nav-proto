import React, { Component } from 'react';
import labels from '../../config/labels';

class Footer extends Component {
  render() {
    const { FontIcon, uiReducer } = this.props;
    return (
      <footer
        className={`footer ${
          uiReducer.lightsOff
            ? 'navbar-dark navbar-inverse'
            : 'navbar-light bg-light'
        }`}
        style={{ zIndex: '999' }}
      >
        <div className="shadow-sm col-12 m-0 p-0 text-center">
          &copy; {labels.ui.siteInfo.name} {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
}

export default Footer;
