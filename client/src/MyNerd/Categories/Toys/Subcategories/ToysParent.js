/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../../Selector';

class ToysParent extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer, tabColour } = this.props;
    return (
      <li>
        <Selector
          category="toys"
          enabled={nerdReducer.category[0].level1[3].toys.isEnabled}
          expanded={nerdReducer.category[0].level1[3].toys.isExpanded}
          descendants={[
            nerdReducer.category[1].level2[7].lego,
            nerdReducer.category[1].level2[8].actionFigures,
          ]}
          label="Toys"
          level={1}
          nerdUpdateCheck={nerdUpdateCheck}
          reducer={nerdReducer}
          tabColour={tabColour}
          tooltip={nerdReducer.category[0].level1[3].toys.description}
        />
      </li>
    );
  }
}

export default ToysParent;
