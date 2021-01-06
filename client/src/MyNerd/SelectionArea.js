// Imports:
import React, { Component } from 'react';
import Gaming from './Categories/Gaming/Gaming';
import Comics from '../MyNerd/Categories/Comics/Comics';
import MyNerdNav from './MyNerdNav';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import TVFilm from './Categories/TVFilm/TVFilm';
import Toys from './Categories/Toys/Toys';
import Wrestling from './Categories/Wrestling/Wrestling';
import settings from '../config/settings';

class SelectionArea extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionTitle
          tabColour={settings.ui.style.sectionTab.mynerd}
          title="Step 1/3: Preferences"
        />

        <MyNerdNav
          nerdReducer={this.props.nerdReducer}
          nerdSetupReducer={this.props.nerdSetupReducer}
          nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
        />
        <br />
        <SectionTitlePostsTitle text="Select/check the content you wish to see:" />
        <br />
        <div className="col-lg-8">
          <div className="mynerd-wrapper mt-1">
            <div className="col-12 row m-0 p-0 py-2 font-weight-light text-muted">
              <div className="col-2 m-0 p-0 text-center">
                <span className="d-none d-md-flex">Expand:</span>
              </div>
              <div className="col-7 m-0 p-0 pl-2">Category:</div>
              <div className="col-1 m-0 p-0 text-center">Enable:</div>
              <div className="col-2 m-0 p-0"></div>
            </div>
            <Gaming
              nerdReducer={this.props.nerdReducer}
              nerdUpdateCheck={this.props.nerdUpdateCheck}
              tabColour={settings.ui.style.sectionTab.gaming.modern}
            />
            <Comics
              nerdReducer={this.props.nerdReducer}
              nerdUpdateCheck={this.props.nerdUpdateCheck}
              tabColour={settings.ui.style.sectionTab.comics}
            />
            <TVFilm
              nerdReducer={this.props.nerdReducer}
              nerdUpdateCheck={this.props.nerdUpdateCheck}
              tabColour={settings.ui.style.sectionTab.tvfilm}
            />
            <Toys
              nerdReducer={this.props.nerdReducer}
              nerdUpdateCheck={this.props.nerdUpdateCheck}
              tabColour={settings.ui.style.sectionTab.toys}
            />
            <Wrestling
              nerdReducer={this.props.nerdReducer}
              nerdUpdateCheck={this.props.nerdUpdateCheck}
              tabColour={settings.ui.style.sectionTab.wrestling}
            />
          </div>
        </div>
        <br />
        <MyNerdNav
          nerdReducer={this.props.nerdReducer}
          nerdSetupReducer={this.props.nerdSetupReducer}
          nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
        />
        <br />
      </React.Fragment>
    );
  }
}

export default SelectionArea;
