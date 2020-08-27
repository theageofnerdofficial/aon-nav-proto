import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SectionTitle from '../SectionTitle/SectionTitle';

class LoginFormPage extends Component {
  componentDidMount() {
    document.getElementById('ui-login-btn-wrapper').style.display = 'none';
  }
  componentWillUnmount() {
    document.getElementById('ui-login-btn-wrapper').style.display = 'block';
  }

  render() {
    return (
      <div>
        <div className="col-12 col-md-8 offset-md-2">
          <SectionTitle title="Login" />
          <br />
          <LoginForm userLogin={this.props.userLogin} />
        </div>
      </div>
    );
  }
}

export default LoginFormPage;
