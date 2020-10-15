import React, { Component } from 'react';
import {
  SOURCE_INSTAGRAM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  SOURCE_YOUTUBE,
} from '../../../../constants';

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
            } else if (e.target.value === 'instagram') {
              service = SOURCE_INSTAGRAM;
            } else if (e.target.value === 'youtube') {
              service = SOURCE_YOUTUBE;
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
          <option value="instagram">Instagram</option>
          <option value="youtube">Youtube</option>
        </select>
      </React.Fragment>
    );
  }
}

export default ServiceAdd;
