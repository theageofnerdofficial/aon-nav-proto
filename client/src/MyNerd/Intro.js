import React, { Component } from 'react';
import settings from '../config/settings';
import FontIcon from '../Components/FontIcon/FontIcon';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.mynerd}
          title="Welcome to AON"
        />
        <SectionTitlePostsTitle text="Let's customize your AON experience." />
        <br />
        <SectionTitlePostsTitle text="This process will take just a moment & is totally worth it." />
        <button
          className="btn btn-info"
          style={{ marginTop: 100 }}
          onClick={() => {
            this.props.nerdSetupUpdatePhase({ phase: 1 });
          }}
        >
          Get Started {FontIcon('faChevronRight')}
        </button>
      </React.Fragment>
    );
  }
}

export default Intro;
