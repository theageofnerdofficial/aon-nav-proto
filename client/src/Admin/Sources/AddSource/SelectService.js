import React, { Component } from 'react';
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../../constants';

class SelectService extends Component {
  render() {
    return (
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
          this.props.sourceAddFormSelect(service);
        }}
        required
      >
        <option disabled selected value>
          -- Select service --
        </option>
        <option value="reddit">Reddit</option>
        <option value="twitter">Twitter</option>
      </select>
    );
  }
}

export default SelectService;
