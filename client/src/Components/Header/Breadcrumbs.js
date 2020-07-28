import React, { Component } from 'react';
import utils from '../Utils/utils/utils';

class Breadcrumbs extends Component {
  componentDidMount() {
    // get location
    // dynamically generate bread crumbs
    //console.log(this.props.location.pathname);
  }
  getCrumbs() {
    const locationArr = window.location.href.split('/');
    const pathArr = locationArr.splice(3);
    const generateLinks = (page) => {
      const pageIndex = pathArr.indexOf(page);
      const pageLink = pathArr.slice(0, pageIndex + 1).join('/');
      const pageIsLast = pageIndex === pathArr.length - 1;
      const pageDelimiterSymb = '>';
      const pageDelimiter = <span>&nbsp;{pageDelimiterSymb}&nbsp;</span>;

      //
      //
      //
      // CHANGE HREF to LINK this.props.Link
      //
      //
      //
      return (
        <li>
          {pageIsLast ? (
            utils.str.makeTitleCase(page)
          ) : (
            <span>
              <a href={`../${pageLink}`}>{utils.str.makeTitleCase(page)}</a>
              {pageDelimiter}
            </span>
          )}
        </li>
      );
    };
    const xxx = pathArr.map((ll) => {
      return generateLinks(ll);
    });
    return xxx;
  }
  render() {
    return (
      <div>
        <ul
          className="breadcrumb m-1 font-weight-light"
          style={{ background: 'none' }}
        >
          {this.getCrumbs()}
        </ul>
      </div>
    );
  }
}

export default Breadcrumbs;
