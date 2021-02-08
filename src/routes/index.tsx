import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={['/', '/game/:id']} component={Home} />
    </Switch>
  );
};

export default Routes;
