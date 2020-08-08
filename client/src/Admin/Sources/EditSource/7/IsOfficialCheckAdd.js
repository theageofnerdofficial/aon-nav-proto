import React, { Component } from 'react';

class IsOfficialCheckAdd extends Component {
  render() {
    return (
      <div className="col-12 row p-0 m-0">
        <div className="col-2 p-0">
          <input
            className="text-center form-control"
            name="is-official-source"
            type="checkbox"
            defaultChecked={
              this.props.sourceReducer.sourceById
                ? this.props.sourceReducer.sourceById.isOfficial
                : null
            }
          />
        </div>
        <div className="col-10 p-0">
          <p className="font-weight-light form-control border-0">
            Is official source?
          </p>
        </div>
      </div>
    );
  }
}

export default IsOfficialCheckAdd;
