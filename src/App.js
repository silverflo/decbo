import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddRoom from './pages/AddRoom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Register from './pages/Register';
import {ROUTES} from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.home.path}>
            <Home />
          </Route>

          <Route exact path={ROUTES.register.path}>
            <Register />
          </Route>

          <Route exact path={ROUTES.dashboard.path}>
            <Dashboard />
          </Route>

          <Route exact path={ROUTES.addRoom.path}>
            <AddRoom />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
