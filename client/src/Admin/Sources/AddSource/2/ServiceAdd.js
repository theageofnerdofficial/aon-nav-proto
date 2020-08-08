import React, { Component } from 'react';
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../../../constants';

class ServiceAdd extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.sourceReducer ? this.props.sourceReducer.service : null}
        <select
          className="form-control font-weight-light my-3"
          name="service"
          onChange={(e) => {
            let service;
            if (e.target.value === 'reddit') {
              service = SOURCE_REDDIT;
            } else if (e.target.value === 'twitter') {
              service = SOURCE_TWITTER;
            }
            this.props.sourceAddService(service);
          }}
          required
          value={
            this.props.sourceReducer ? this.props.sourceReducer.service : null
          }
        >
          <option disabled selected value>
            -- Select service --
          </option>
          <option value="reddit">Reddit</option>
          <option value="twitter">Twitter</option>
        </select>
      </React.Fragment>
    );
  }
}

export default ServiceAdd;
