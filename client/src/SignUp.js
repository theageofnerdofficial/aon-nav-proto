import React, { Component } from 'react';
import SignupForm from './Components/SignupForm/SignupForm';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';

class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionTitle title="Sign Up" />
        <SectionTitlePostsTitle text="Witty-nerdy-cool remark here" />
        <div className="col-12 col-md-6 offset-md-3">
          <SignupForm userSignup={this.props.userSignup} />
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
