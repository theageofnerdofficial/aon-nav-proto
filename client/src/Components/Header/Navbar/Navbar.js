import React, { Component } from 'react';
import '../Header.css';

class Navbar extends Component {
  render() {
    return (
      <div className="col-12 bg-custom row m-0 navbar-custom">
        {['Home', 'TV', 'Film', 'Comics', 'Gaming', 'Misc'].map((page) => {
          return (
            <div className="col-2 rounded-0 m-0 p-0">
              <a
                href={`/#/${
                  page.toLowerCase() === 'home' ? '' : page.toLowerCase()
                }`}
              >
                <button
                  onClick={(e) => this.props.setActiveItem(e)}
                  name={page.toLowerCase()}
                  className={`navbar-btn p-0 font-weight-bold rounded-0 border btn btn-light text-muted text-center form-control text-uppercase xy ${
                    this.props.activeItem === page.toLowerCase()
                      ? 'nav-btn-active'
                      : ''
                  }`}
                >
                  {page}
                </button>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Navbar;
