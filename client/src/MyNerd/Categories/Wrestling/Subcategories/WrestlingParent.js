/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../../Selector';

class WrestlingParent extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer } = this.props;
    return (
      <ul className="p-0">
        <li>
          <Selector
            category="wrestling"
            enabled={nerdReducer.category[0].level1[4].wrestling.isEnabled}
            expanded={nerdReducer.category[0].level1[4].wrestling.isExpanded}
            descendants={[
              nerdReducer.category[1].level2[9].wwe,
              nerdReducer.category[1].level2[10].tna,
            ]}
            label="Wrestling"
            level={1}
            nerdUpdateCheck={nerdUpdateCheck}
            reducer={nerdReducer}
          />
        </li>
      </ul>
    );
  }
}

export default WrestlingParent;
