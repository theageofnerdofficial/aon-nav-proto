import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import localData from '../../config/localData';
import '../../Main.css';
class LoggedIn extends Component {
  render() {
    return (
      <div className="col-12 m-0 p-0 row div-loggedin-wrapper">
        <div className="col-8 div-loggedin-subwrapper m-0 p-0">
          <this.props.Link to={`/profile/${localData.loginItems.id.get()}`}>
            <button className="btn btn-light btn-link btn-login form-control">
              <Avatar
                src={localData.loginItems.username.get()}
                style={{ width: 20 }}
              ></Avatar>{' '}
              My Profile
            </button>
          </this.props.Link>
        </div>
        <div
          className="m-0 p-0 col-4"
          onClick={() => {
            this.props.userLogout();
          }}
          style={{
            border: 0,
            fontWeight: 300,
            letterSpacing: -1,
          }}
        >
          <button className="btn btn-light btn-link btn-login form-control">
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default LoggedIn;
