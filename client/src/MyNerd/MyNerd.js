import React, { Component } from 'react';
import CompletedArea from './CompletedArea';
import Intro from './Intro';
import ProfileArea from './ProfileArea';
import SelectionArea from './SelectionArea';
import './MyNerd.css';

class MyNerd extends Component {
  componentDidMount() {
    this.props.nerdSetupUpdatePhase({ phase: 0 });
  }

  getPhase = () => {
    let phaseContent;
    switch (this.props.nerdSetupReducer.phase) {
      case 0:
        phaseContent = (
          <Intro
            nerdSetupReducer={this.props.nerdSetupReducer}
            nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
          />
        );
        break;
      case 1:
        phaseContent = (
          <SelectionArea
            nerdReducer={this.props.nerdReducer}
            nerdSetupReducer={this.props.nerdSetupReducer}
            nerdUpdateCheck={this.props.nerdUpdateCheck}
            nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
          />
        );
        break;
      case 2:
        phaseContent = (
          <ProfileArea
            login={this.props.login}
            nerdReducer={this.props.nerdReducer}
            nerdSetupReducer={this.props.nerdSetupReducer}
            nerdUpdateCheck={this.props.nerdUpdateCheck}
            nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
          />
        );
        break;
      case 3:
        phaseContent = (
          <CompletedArea
            nerdReducer={this.props.nerdReducer}
            nerdSetupReducer={this.props.nerdSetupReducer}
            nerdUpdateCheck={this.props.nerdUpdateCheck}
            nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
            usersReducer={this.props.usersReducer}
          />
        );
        break;
      default:
        phaseContent = (
          <Intro
            nerdSetupReducer={this.props.nerdSetupReducer}
            nerdSetupUpdatePhase={this.props.nerdSetupUpdatePhase}
          />
        );
    }
    return phaseContent;
  };
  render() {
    return <div>{this.getPhase()}</div>;
  }
}

export default MyNerd;
