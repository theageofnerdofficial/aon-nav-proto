import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{ zIndex: '999' }}>
        <div className="pr-4 text-muted text-right font-weight-light">
          &copy; The Age of Nerd {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
}

export default Footer;
