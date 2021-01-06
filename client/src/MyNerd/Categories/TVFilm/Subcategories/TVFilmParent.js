/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../../Selector';

class TVFilmParent extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer, tabColour } = this.props;
    return (
      <ul className="p-0">
        <li>
          <Selector
            category="tvFilm"
            enabled={nerdReducer.category[0].level1[2].tvFilm.isEnabled}
            expanded={nerdReducer.category[0].level1[2].tvFilm.isExpanded}
            descendants={[
              nerdReducer.category[1].level2[5].television,
              nerdReducer.category[1].level2[6].film,
            ]}
            label="TV/Film"
            level={1}
            nerdUpdateCheck={nerdUpdateCheck}
            reducer={nerdReducer}
            tabColour={tabColour}
            tooltip={nerdReducer.category[0].level1[2].tvFilm.description}
          />
        </li>
      </ul>
    );
  }
}

export default TVFilmParent;
