import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import { GamePage, HomePage, ResultPage } from './pages';


const App = () => {
  return (
      <Router>
          <Route exact path={ROUTES.HOME}>
              <HomePage />
          </Route>
          <Route exact path={ROUTES.GAME}>
              <GamePage />
          </Route>

          <Route exact path={ROUTES.RESULT}>
              <ResultPage />
          </Route>

      </Router>
  );
}

export default App;
