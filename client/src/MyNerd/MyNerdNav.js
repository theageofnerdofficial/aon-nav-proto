import React, { Component } from 'react';
import FontIcon from '../Components/FontIcon/FontIcon';

class MyNerdNav extends Component {
  render() {
    return (
      <div className="col-12 row m-0 p-0">
        <div className="col-6 m-0 p-0">
          <button
            className="btn btn-light"
            onClick={() => {
              this.props.nerdSetupUpdatePhase({
                phase: this.props.nerdSetupReducer.phase - 1,
              });
            }}
          >
            {FontIcon('faChevronLeft')} Back
          </button>
        </div>
        <div className="col-6 m-0 p-0 text-right">
          {this.props.nerdSetupReducer.phase === 3 ? null : (
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.nerdSetupUpdatePhase({
                  phase: this.props.nerdSetupReducer.phase + 1,
                });
              }}
            >
              Next Step {FontIcon('faChevronRight')}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default MyNerdNav;
