/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../Selector';
import WrestlingParent from './Subcategories/WrestlingParent';

class Wrestling extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer, tabColour } = this.props;
    return (
      <ul className="p-0">
        <WrestlingParent
          nerdReducer={nerdReducer}
          nerdUpdateCheck={nerdUpdateCheck}
          tabColour={tabColour}
        />
        <ul
          style={{
            display: nerdReducer.category[0].level1[4].wrestling.isExpanded
              ? 'block'
              : 'none',
          }}
        >
          {/* Descendants:
           ******************************************************/}
          <li>
            <Selector
              category="impact"
              enabled={nerdReducer.category[1].level2[10].impact.isEnabled}
              expanded={nerdReducer.category[1].level2[10].impact.isExpanded}
              label="Impact"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
              tooltip={nerdReducer.category[1].level2[10].impact.description}
            />
          </li>
          <li>
            <Selector
              category="wwe"
              enabled={nerdReducer.category[1].level2[9].wwe.isEnabled}
              expanded={nerdReducer.category[1].level2[9].wwe.isExpanded}
              label="WWE"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
              tooltip={nerdReducer.category[1].level2[9].wwe.description}
            />
          </li>
        </ul>
      </ul>
    );
  }
}

export default Wrestling;
