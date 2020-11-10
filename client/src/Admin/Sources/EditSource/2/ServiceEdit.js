import React, { Component } from 'react';
import {
  SOURCE_INSTAGRAM_LABEL,
  SOURCE_REDDIT_LABEL,
  SOURCE_TWITTER_LABEL,
  SOURCE_YOUTUBE_LABEL,
} from '../../../../constants';

class ServiceEdit extends Component {
  render() {
    let { FormatSource, sourceReducer } = this.props;
    return (
      <React.Fragment>
        <select
          className="form-control font-weight-light my-3"
          disabled
          name="service"
          required
          value={
            sourceReducer
              ? FormatSource.form.getServiceByName(sourceReducer)
              : null
          }
        >
          <option disabled selected value>
            -- Select service --
          </option>
          <option value={SOURCE_REDDIT_LABEL.toLowerCase()}>
            {SOURCE_REDDIT_LABEL}
          </option>
          <option value={SOURCE_YOUTUBE_LABEL.toLowerCase()}>
            {SOURCE_TWITTER_LABEL}
          </option>
          <option value={SOURCE_INSTAGRAM_LABEL.toLowerCase()}>
            {SOURCE_INSTAGRAM_LABEL}
          </option>
          <option value={SOURCE_YOUTUBE_LABEL.toLowerCase()}>
            {SOURCE_YOUTUBE_LABEL}
          </option>
        </select>
      </React.Fragment>
    );
  }
}

export default ServiceEdit;
