import React, { Component } from 'react';

class SelectTwitterUser extends Component {
  render() {
    return (
      <div className="col-12 row p-0 m-0 my-3">
        <div className="col-2 p-0">
          <button
            className="btn btn-light form-control font-weight-light"
            style={{
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            @
          </button>
        </div>
        <div className="col-10 p-0">
          <input
            className="form-control font-weight-light"
            name="twitter-user"
            placeholder={`e.g. ${this.props.getPlaceholder(
              this.props.sourceReducer
            )}`}
            required
            style={{
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
            }}
          />
        </div>
      </div>
    );
  }
}

export default SelectTwitterUser;
