/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../Selector';
import TVFilmParent from './Subcategories/TVFilmParent';

class TVFilm extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer } = this.props;
    return (
      <ul className="p-0">
        <TVFilmParent
          nerdReducer={nerdReducer}
          nerdUpdateCheck={nerdUpdateCheck}
        />
        <ul
          style={{
            display: nerdReducer.category[0].level1[2].tvFilm.isExpanded
              ? 'block'
              : 'none',
          }}
        >
          {/* Descendants:
           ******************************************************/}
          <li>
            <Selector
              category="film"
              enabled={nerdReducer.category[1].level2[6].film.isEnabled}
              expanded={nerdReducer.category[1].level2[6].film.isExpanded}
              label="Film"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
              reducer={nerdReducer}
            />
          </li>
          <li>
            <Selector
              category="television"
              enabled={nerdReducer.category[1].level2[5].television.isEnabled}
              expanded={nerdReducer.category[1].level2[5].television.isExpanded}
              label="Television"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
              reducer={nerdReducer}
            />
          </li>
        </ul>
      </ul>
    );
  }
}

export default TVFilm;
