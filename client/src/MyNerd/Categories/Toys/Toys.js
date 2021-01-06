/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../Selector';
import ToysParent from './Subcategories/ToysParent';

class Toys extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer, tabColour } = this.props;
    return (
      <ul className="p-0">
        <ToysParent
          nerdReducer={nerdReducer}
          nerdUpdateCheck={nerdUpdateCheck}
          tabColour={tabColour}
        />
        <ul
          style={{
            display: nerdReducer.category[0].level1[3].toys.isExpanded
              ? 'block'
              : 'none',
          }}
        >
          {/* Descendants:
           ******************************************************/}
          <li>
            <Selector
              category="actionFigures"
              enabled={
                nerdReducer.category[1].level2[8].actionFigures.isEnabled
              }
              expanded={
                nerdReducer.category[1].level2[8].actionFigures.isExpanded
              }
              label="Action Figures"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
              reducer={nerdReducer}
              tooltip={
                nerdReducer.category[1].level2[8].actionFigures.description
              }
            />
          </li>
          <li>
            <Selector
              category="lego"
              enabled={nerdReducer.category[1].level2[7].lego.isEnabled}
              expanded={nerdReducer.category[1].level2[7].lego.isExpanded}
              label="Lego"
              level={2}
              nerdUpdateCheck={nerdUpdateCheck}
              tooltip={nerdReducer.category[1].level2[7].lego.description}
            />
          </li>
        </ul>
      </ul>
    );
  }
}

export default Toys;
