/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../Selector';

import WrestlingParent from './Subcategories/WrestlingParent';

class Wrestling extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer } = this.props;
    return (
      <ul className="p-0">
        <WrestlingParent
          nerdReducer={nerdReducer}
          nerdUpdateCheck={nerdUpdateCheck}
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
              category="tna"
              enabled={nerdReducer.category[1].level2[10].tna.isEnabled}
              expanded={nerdReducer.category[1].level2[10].tna.isExpanded}
              label="TNA"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
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
            />
          </li>
        </ul>
      </ul>
    );
  }
}

export default Wrestling;
