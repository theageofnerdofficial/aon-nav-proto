import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ProtectedRoute = ({
  component: Component,
  accessLevel,
  login,
  userLogin,
  usersReducer,
  ...rest
}) => {
  //&& !login.username
  if (login.authenticationPending) {
    return <Loader />;
  } else {
    if (!login.loggedIn) {
      return (
        <React.Fragment>
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
          {/* <SignInForm userLogin={userLogin} />*/}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Route
          {...rest}
          render={(props) => {
            // login.accessLevel >= accessLevel
            if (login && login.accessLevel >= accessLevel) {
              return <Component {...rest} {...props} login={login} />;
            } else {
              return (
                <Redirect
                  to={{
                    pathname: '/unauthorised',
                    state: {
                      from: props.location,
                    },
                  }}
                />
              );
            }
          }}
        />
      </React.Fragment>
    );
  }
};

export default ProtectedRoute;
