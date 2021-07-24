import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SlackHomePage from './Components/SlackHomePage/SlackHomePage';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/">
              <SlackHomePage />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
