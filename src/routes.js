import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={() => <h1>login</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
