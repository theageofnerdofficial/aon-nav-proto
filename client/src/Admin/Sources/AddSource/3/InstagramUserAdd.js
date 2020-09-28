import React, { Component } from 'react';
import FontIcon from '../../../../Components/FontIcon/FontIcon';
import BrandColourAddInfo from './BrandColourAddInfo';

class InstagramUserAdd extends Component {
  render() {
    return (
      <div className="col-12 row p-0 m-0 my-3">
        <div className="col-2 p-0">
          <button
            className="btn btn-light form-control font-weight-light text-muted"
            style={{
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            {FontIcon('faUser')}
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
        <div className="col-12 row p-0 m-0 my-3">
          <div className="col-2 p-0">
            {' '}
            <button
              className="btn btn-light form-control font-weight-light"
              style={{
                height: '100%',
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
              }}
            >
              Brand colour
            </button>
          </div>
          <div className="col-10 p-0">
            <div className="col-12 m-0 p-0 row" style={{ height: '100%' }}>
              <div className="col-2 p-0 ">
                {' '}
                <input
                  style={{ height: '100%' }}
                  type="color"
                  name="twitter-brand-color"
                  defaultValue="#e4000f"
                ></input>
              </div>
              <div className="col-10 p-0 ">
                <BrandColourAddInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InstagramUserAdd;
