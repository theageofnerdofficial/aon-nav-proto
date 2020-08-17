import React, { Component } from 'react';
import settings from '../config/settings';
import FontIcon from '../Components/FontIcon/FontIcon';
import MyNerdNav from './MyNerdNav';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

class CompletedArea extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.mynerd}
          title="Step 3/3: Completed!"
        />

        <MyNerdNav
          nerdReducer={this.props.nerdReducer}
          nerdSetupReducer={this.props.nerdSetupReducer}
          nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
        />

        <SectionTitlePostsTitle text="Well done, blah blah blah" />
        <button
          className="btn btn-info"
          style={{ marginTop: 100 }}
          onClick={() => {
            this.props.nerdSetupUpdatePhase({ phase: 1 });
          }}
        >
          Go to "My Nerd" {FontIcon('faChevronRight')}
        </button>
      </React.Fragment>
    );
  }
}

export default CompletedArea;
