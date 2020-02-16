import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from '../pages/Dashboard';
import Form from '../pages/Dashboard/form';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/register" exact component={Form} />
        <Route path="/register/:id" exact component={Form} />
      </Switch>
    </BrowserRouter>
  );
}
