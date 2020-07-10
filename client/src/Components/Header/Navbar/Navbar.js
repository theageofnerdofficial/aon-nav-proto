import React, { Component } from 'react';
import '../Header.css';

class Navbar extends Component {
  render() {
    return (
      <div className="bg-custom col-12 m-0 navbar-custom row">
        {['Home', 'TV', 'Film', 'Comics', 'Gaming', 'Misc'].map((page) => {
          return (
            <div className="bg-light col-2 m-0 p-0 rounded-0">
              <a
                href={`/#/${
                  page.toLowerCase() === 'home' ? '' : page.toLowerCase()
                }`}
              >
                <button
                  className={`btn btn-light form-control navbar-btn p-0 rounded-0  text-center text-muted text-uppercase ${
                    this.props.activeItem === page.toLowerCase()
                      ? 'nav-btn-active'
                      : ''
                  }`}
                  name={page.toLowerCase()}
                  onClick={(e) => this.props.setActiveItem(e)}
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
