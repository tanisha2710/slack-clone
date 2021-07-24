import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import LeftNav from './Components/LeftNav/LeftNav';
import ChatRoom from './Components/ChatRoom/ChatRoom';
import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import Login from './Components/Login/Login';

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="appBody">
            <LeftNav />
              <Switch>
                <Route path="/">
                  <ChatRoom />
                </Route>
                </Switch>
              </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
