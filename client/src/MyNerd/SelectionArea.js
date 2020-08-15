import React, { Component } from 'react';
import Gaming from './Categories/Gaming/Gaming';
import Comics from '../MyNerd/Categories/Comics/Comics';
import TVFilm from './Categories/TVFilm/TVFilm';
import Toys from './Categories/Toys/Toys';
import Wrestling from './Categories/Wrestling/Wrestling';

class SelectionArea extends Component {
  render() {
    return (
      <div className="mynerd-wrapper">
        <div className="col-8 row m-0 p-0 py-2 font-weight-light text-muted">
          <div className="col-1 m-0 p-0 text-center">Expand:</div>
          <div className="col-9 m-0 p-0 pl-2">Category:</div>
          <div className="col-1 m-0 p-0 text-center">Enable:</div>
          <div className="col-1 m-0 p-0"></div>
        </div>
        <Gaming
          nerdReducer={this.props.nerdReducer}
          nerdUpdateCheck={this.props.nerdUpdateCheck}
        />
        <Comics
          nerdReducer={this.props.nerdReducer}
          nerdUpdateCheck={this.props.nerdUpdateCheck}
        />
        <TVFilm
          nerdReducer={this.props.nerdReducer}
          nerdUpdateCheck={this.props.nerdUpdateCheck}
        />
        <Toys
          nerdReducer={this.props.nerdReducer}
          nerdUpdateCheck={this.props.nerdUpdateCheck}
        />
        <Wrestling
          nerdReducer={this.props.nerdReducer}
          nerdUpdateCheck={this.props.nerdUpdateCheck}
        />
      </div>
    );
  }
}

export default SelectionArea;
