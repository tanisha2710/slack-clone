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
import  Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="appLoading">
        <div className="appLoadingContents">
          <img src="https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj" />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </div>
      </div>
    );
  };

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
