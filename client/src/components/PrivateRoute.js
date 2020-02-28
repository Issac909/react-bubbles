import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(rest)
    return (
        <Route
          {...rest}
          render={props => {
            if (localStorage.getItem('token')) {
              return <Component {...props} />;
            }
            return <Redirect to='/' />;
          }}
        />
      );
}

export default PrivateRoute;