import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, data, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log(data);
      return localStorage.getItem('aon_user_id') ? (
        <Component {...props} {...data} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      );
    }}
  />
);

export default ProtectedRoute;
