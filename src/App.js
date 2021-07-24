import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SlackHomePage from './Components/SlackHomePage/SlackHomePage';
import Header from './Components/Header/Header';
import LeftNav from './Components/LeftNav/LeftNav';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <div className="appBody">
          <LeftNav />
            <Switch>
              <Route path="/">
              </Route>
              </Switch>
            </div>
        </>
      </Router>
    </div>
  );
}

export default App;
