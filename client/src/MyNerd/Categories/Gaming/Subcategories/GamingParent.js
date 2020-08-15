/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../../Selector';

class GamingParent extends Component {
  render() {
    const { nerdUpdateCheck, nerdReducer } = this.props;
    return (
      <li>
        <Selector
          category="gaming"
          enabled={nerdReducer.category[0].level1[0].gaming.isEnabled}
          expanded={nerdReducer.category[0].level1[0].gaming.isExpanded}
          descendants={[
            // Retrogaming:
            nerdReducer.category[1].level2[0].retroGaming,
            nerdReducer.category[2].level3[0].arcade,
            nerdReducer.category[2].level3[1].atari,
            nerdReducer.category[2].level3[2].commodore,
            nerdReducer.category[2].level3[3].nintendo,
            nerdReducer.category[2].level3[4].sega,
            nerdReducer.category[2].level3[5].zx,
            // Moderngaming
            nerdReducer.category[1].level2[1].modernGaming,
            nerdReducer.category[2].level3[6].microsoft,
            nerdReducer.category[2].level3[7].nintendoModern,
            nerdReducer.category[2].level3[8].pc,
            nerdReducer.category[2].level3[9].sony,
            // Tabletop gaming
            nerdReducer.category[1].level2[2].tabletopGaming,
            nerdReducer.category[2].level3[10].dand,
          ]}
          label="Gaming"
          level={1}
          nerdUpdateCheck={nerdUpdateCheck}
          reducer={nerdReducer}
        />
      </li>
    );
  }
}

export default GamingParent;
