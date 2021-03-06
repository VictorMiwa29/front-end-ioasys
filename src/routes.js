import React, { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthContext } from './context/Auth';

/* eslint-disable react/jsx-props-no-spreading */
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authorization } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => (authorization ? <Component {...rest} /> : <Redirect to="/login" />)}
    />
  );
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
