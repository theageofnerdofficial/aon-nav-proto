import React, { Component } from 'react';

class SourceRefineByService extends Component {
  render() {
    const {
      serviceName,
      source,
      sourceReducer,
      sourcesRefineByService,
    } = this.props;
    return (
      <div className="m-0 p-0 col-3 row">
        <input
          className="m-0 p-0"
          checked={sourceReducer.serviceShown[source]}
          name={serviceName.toLowerCase()}
          onChange={(e) => {
            sourcesRefineByService({
              service: e.target.name,
              value: e.target.checked,
            });
          }}
          style={{ height: '100%' }}
          type="checkbox"
        />
        &nbsp;
        <p
          className="m-0 p-0 vertical-center"
          style={{ fontSize: '0.77rem', height: '100%' }}
        >
          {serviceName}
        </p>
      </div>
    );
  }
}

export default SourceRefineByService;
