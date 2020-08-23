/* Imports:
 *********************************************************/
import React, { Component } from 'react';
import Selector from '../../../Selector';

class ComicsParent extends Component {
  componentDidMount() {
    console.log(this.props.nerdReducer.category[1].level2[3].marvel);
  }
  render() {
    const { nerdUpdateCheck, nerdReducer } = this.props;
    return (
      <ul className="p-0">
        <li>
          <Selector
            category="comics"
            enabled={nerdReducer.category[0].level1[1].comics.isEnabled}
            expanded={nerdReducer.category[0].level1[1].comics.isExpanded}
            descendants={[
              this.props.nerdReducer.category[1].level2[3].marvel,
              this.props.nerdReducer.category[1].level2[4].dc,
            ]}
            label="Comics"
            level={1}
            nerdUpdateCheck={nerdUpdateCheck}
            reducer={nerdReducer}
            tooltip={nerdReducer.category[0].level1[1].comics.description}
          />
        </li>
      </ul>
    );
  }
}

export default ComicsParent;
