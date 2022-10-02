import React from 'react';
import './app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from "react-router";
import Preferences from '../preferences/preferences';
import Dashboard from '../dashboard/dashboard';

function App() {
    return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
