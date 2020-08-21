import React, { Component } from 'react';
import SignupForm from './Components/SignupForm/SignupForm';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from './Components/SectionTitle/SectionTitlePostsTitle';

class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-md-8 offset-md-2">
          <SectionTitle title="Sign Up" />
          <SectionTitlePostsTitle text="Witty-nerdy-cool remark here" />
          <br />
          <SignupForm
            userLogin={this.props.userLogin}
            usersGetList={this.props.usersGetList}
            userSignup={this.props.userSignup}
            usersReducer={this.props.usersReducer}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
