import React, { Component } from 'react';
import loginCreds from '../../config/loginCreds';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';

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
        {this.props.usersReducer
          ? checkLoggedIn({
              loggedIn: <LoggedIn userLogout={this.props.userLogout} />,
              notLoggedIn: <NotLoggedIn />,
            })
          : ''}
      </React.Fragment>
    );
  }
}

export default LoginBtn;
