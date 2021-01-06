/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../Selector';
import ComicsParent from './Subcategories/ComicsParent';

class Comics extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer, tabColour } = this.props;
    return (
      <ul className="p-0">
        <ComicsParent
          nerdReducer={nerdReducer}
          nerdUpdateCheck={nerdUpdateCheck}
          tabColour={tabColour}
        />
        <ul
          style={{
            display: nerdReducer.category[0].level1[1].comics.isExpanded
              ? 'block'
              : 'none',
          }}
        >
          {/* Descendants:
           ******************************************************/}
          <li>
            <Selector
              category="dc"
              enabled={nerdReducer.category[1].level2[4].dc.isEnabled}
              expanded={nerdReducer.category[1].level2[4].dc.isExpanded}
              label="DC"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
              tooltip={nerdReducer.category[1].level2[4].dc.description}
            />
          </li>
          <li>
            <Selector
              category="marvel"
              enabled={nerdReducer.category[1].level2[3].marvel.isEnabled}
              expanded={nerdReducer.category[1].level2[3].marvel.isExpanded}
              label="Marvel"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
              reducer={nerdReducer}
              tooltip={nerdReducer.category[1].level2[3].marvel.description}
            />
          </li>
        </ul>
      </ul>
    );
  }
}

export default Comics;
