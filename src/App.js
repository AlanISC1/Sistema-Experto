import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Start from './Components/Start';
import Welcome from './Components/Welcome';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Welcome/>
      <Switch>
        <Route path="/start">
          <Start />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
