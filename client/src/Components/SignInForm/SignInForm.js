import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import SectionTitlePostsTitle from '../SectionTitle/SectionTitlePostsTitle';

class SignInForm extends Component {
  render() {
    return (
      <div className="border">
        <LoginForm userLogin={this.props.userLogin} />
      </div>
    );
  }
}

export default SignInForm;
