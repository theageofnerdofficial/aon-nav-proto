import React, { Component } from 'react';
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../../../constants';

class ServiceEdit extends Component {
  render() {
    return (
      <React.Fragment>
        <select
          className="form-control font-weight-light my-3"
          disabled
          name="service"
          required
          value={
            this.props.sourceReducer
              ? this.props.FormatSource.form.getServiceByName(
                  this.props.sourceReducer
                )
              : null
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

export default ServiceEdit;
