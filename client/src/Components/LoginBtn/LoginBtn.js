import React, { Component } from 'react';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';
import loginCreds from '../../config/loginCreds';

class LoginBtn extends Component {
  componentDidMount() {
    this.props.userAuthenticate();
  }
  render() {
    const checkLoggedIn = (o) => {
      if (!this.props.usersReducer.authenticationPending) {
        if (this.props.usersReducer.id) {
          loginCreds.storageItem.set({
            id: this.props.usersReducer.id,
            username: this.props.usersReducer.username,
          });
        }
        return this.props.usersReducer.loggedIn &&
          this.props.usersReducer.username
          ? o.loggedIn
          : o.notLoggedIn;
      }
    };

    return (
      <React.Fragment>
        <div id="ui-login-btn-wrapper">
          {this.props.usersReducer
            ? checkLoggedIn({
                loggedIn: (
                  <LoggedIn
                    Link={this.props.Link}
                    userLogout={this.props.userLogout}
                  />
                ),
                notLoggedIn: <NotLoggedIn />,
              })
            : ''}
        </div>
      </React.Fragment>
    );
  }
}

export default LoginBtn;
