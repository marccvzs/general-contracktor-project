import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Projects from './Projects';
import Tasks from './Tasks';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if (r.ok) {
        r.json()
        .then(user => {
          setUser(user)
          setLoggedIn(true)
        });
      }
    });
  }, []);

  return (
    <div className="bg-slate-600 h-screen grid grid-cols-3 gap-4 grid-rows-3">
      <NavBar />
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/login" /> : <Home user={user} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
