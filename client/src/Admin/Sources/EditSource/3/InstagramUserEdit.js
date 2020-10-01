import React, { Component } from 'react';
import BrandColourAddInfo from '../../AddSource/3/BrandColourAddInfo';
import FontIcon from '../../../../Components/FontIcon/FontIcon';

class InstagramUserEdit extends Component {
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
            {FontIcon('faUser')}
          </button>
        </div>
        <div className="col-10 p-0">
          <input
            className="form-control font-weight-light"
            defaultValue={
              this.props.sourceReducer.sourceById
                ? this.props.sourceReducer.sourceById.username
                : ''
            }
            disabled
            name="instagram-user"
            placeholder={`e.g. ${this.props.getPlaceholder(
              this.props.sourceReducer
            )}`}
            readOnly
            required
            style={{
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              opacity: 0.4,
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
                  name="instagram-brand-color"
                  defaultValue={
                    this.props.sourceReducer.sourceById
                      ? this.props.sourceReducer.sourceById.brandColor
                      : null
                  }
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

export default InstagramUserEdit;
