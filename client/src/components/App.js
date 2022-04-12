import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Projects from './Projects';
import Tasks from './Tasks';
import NoteForm from './NoteForm';
import Login from './Login';
import ClientLogin from './ClientLogin';
import ContractorLogin from './ContractorLogin';
import ClientSignup from './ClientSignup';
import ContractorSignup from './ContractorSignup';

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
        <Route exact path="/signup/client">
          <ClientSignup />
        </Route>
        <Route exact path="/signup/contractor">
          <ContractorSignup />
        </Route>
        <Route exact path="/login/client">
          <ClientLogin onLogin={setUser} />
        </Route>
        <Route exact path="/login/contractor">
          <ContractorLogin />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/note/new">
          <NoteForm />
        </Route>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/login" /> : <Home user={user} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
