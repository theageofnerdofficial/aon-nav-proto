import React, { Component } from 'react';
import utils from '../Utils/utils/utils';

class Breadcrumbs extends Component {
  getCrumbs() {
    const locationArr = window.location.href.split('/'); // <- get location/URL
    const pathArr = locationArr.splice(3); // <- make array of last three path items of URL
    const generateLinks = (page) => {
      const pgIndex = pathArr.indexOf(page); // <- get index of current page in ^ arr
      const pgLink = pathArr.slice(0, pgIndex + 1).join('/'); // <- get path leading to current page
      const pgIsLast = pgIndex === pathArr.length - 1;
      const pgDelimiterSymb = '>'; // The delimiter is the thing separating crumbs
      const pgDelimiter = <span>&nbsp;{pgDelimiterSymb}&nbsp;</span>;
      return (
        /* 
        If there's just one crumb (we're one page deep) & it's the current page, 
        don't bother showing it. The user knows what page they're on and it's
        easy to navigate to:
        */
        <li style={{ display: pathArr.length > 1 ? 'block' : 'none' }}>
          {/* If this is the last crumb, do not wrap it in a hyperlink: */}
          {pgIsLast ? (
            utils.str.makeTitleCase(page)
          ) : (
            <span>
              {/* If this is not the last crumb, wrap it in a hyperlink: */}
              <this.props.Link to={`../${pgLink}`}>
                {utils.str.makeTitleCase(page)}
              </this.props.Link>
              {pgDelimiter}
            </span>
          )}
        </li>
      );
    };
    return pathArr.map((pathItem) => generateLinks(pathItem));
  }
  render() {
    return (
      <div style={{ width: 220 }}>
        <ul
          className="breadcrumb m-1 border font-weight-light"
          style={{ background: 'none' }}
        >
          {/* Return crumbs as list items — wrapped in hyperlinks if need-be */}
          {this.getCrumbs()}
        </ul>
      </div>
    );
  }
}

export default Breadcrumbs;
