// import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { routers } from './route';
import './app.less';

function App() {
  return (
    <Router>
      <Switch>
        {routers.map(router => (
          <Route path={router.path} exact={router.exact} key={router.path}>
            <router.layout>
              <router.component />
            </router.layout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
