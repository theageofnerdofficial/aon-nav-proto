import React, { Component } from 'react';
import {
  SOURCE_INSTAGRAM,
  SOURCE_INSTAGRAM_LABEL,
  SOURCE_REDDIT,
  SOURCE_REDDIT_LABEL,
  SOURCE_TWITTER,
  SOURCE_TWITTER_LABEL,
  SOURCE_YOUTUBE,
  SOURCE_YOUTUBE_LABEL,
} from '../../../../constants';

class ServiceAdd extends Component {
  render() {
    let { sourceAddService, sourceReducer } = this.props;
    return (
      <React.Fragment>
        {sourceReducer ? sourceReducer.service : null}
        <select
          className="form-control font-weight-light my-3"
          name="service"
          onChange={(e) => {
            let service;
            if (e.target.value === SOURCE_REDDIT_LABEL.toLowerCase()) {
              service = SOURCE_REDDIT;
            } else if (e.target.value === SOURCE_TWITTER_LABEL.toLowerCase()) {
              service = SOURCE_TWITTER;
            } else if (
              e.target.value === SOURCE_INSTAGRAM_LABEL.toLowerCase()
            ) {
              service = SOURCE_INSTAGRAM;
            } else if (e.target.value === SOURCE_YOUTUBE_LABEL.toLowerCase()) {
              service = SOURCE_YOUTUBE;
            }
            sourceAddService(service);
          }}
          required
          value={sourceReducer ? sourceReducer.service : null}
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

export default ServiceAdd;
