import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { HomePage } from './pages';

const App = () => {
  return (
      <Router>
          <Route exact path={ROUTES.HOME}>
              <HomePage />
          </Route>
      </Router>
  );
}

export default App;
