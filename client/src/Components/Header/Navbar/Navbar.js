import React, { Component } from 'react';
import '../../../Main.css';

class Navbar extends Component {
  render() {
    /*
     There was an issue with the "tv" nav button taking up as much width
     as "gaming". As such there would be a very padded looking "tv" & a very
     squashed looking "gaming" when viewed from a mobile device. The solution:
     on mobiles, make "tv" only 1 column wide & "gaming" 3 columns wide:
    */
    const resizeByPageName = (page) => {
      page = page.toLowerCase();
      if (page === '+') return 'col-1';
      if (page === 'my nerd') return 'col-3';
      return 'col-2';
    };
    const formatLink = (link) => {
      const lowerCaseLink = link.toLowerCase();
      const slashlessLink = lowerCaseLink.replace(/\//g, '');
      const spacelessLink = slashlessLink.replace(/\s/g, '');
      // eslint-disable-next-line
      const dashlessLink = spacelessLink.replace(/[\/\\]/g, '');
      return dashlessLink;
    };
    return (
      <div
        id="navbar-custom"
        className="navbar-bg-custom col-12 m-0 navbar-custom row"
      >
        {this.props.navItems.map((page) => {
          return (
            <div
              className={`bg-custom ${resizeByPageName(
                page
              )} col-md-2 m-0 p-0 rounded-0`}
              key={'nav-' + page}
            >
              <this.props.Link
                to={`/${page.toLowerCase() === 'home' ? '' : formatLink(page)}`}
              >
                <button
                  className={`btn btn-custom-bg form-control navbar-btn p-0 rounded-0 text-center text-uppercase ${
                    this.props.activeItem === page.toLowerCase()
                      ? `nav-btn-active nav-btn-${formatLink(page)}-active`
                      : ''
                  } nav-btn-${formatLink(page)} `}
                  name={page.toLowerCase()}
                  onClick={(e) => this.props.setActiveItem(e)}
                >
                  {page}
                </button>
              </this.props.Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Navbar;
