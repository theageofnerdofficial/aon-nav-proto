import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{ zIndex: '999' }}>
        <div className="container">
          <p className="text-muted text-right" style={{ fontWeight: 300 }}>
            &copy; The Age of Nerd {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
