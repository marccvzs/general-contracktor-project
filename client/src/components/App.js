import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import ClientHome from './ClientHome';
import NavBar from './NavBar';
import ProjectForm from './ProjectForm';
import ClientLogin from './ClientLogin';
import ClientSignup from './ClientSignup';
import Posts from './Posts';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/client/me")
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

  if (!user) return <ClientLogin onLogin={setLoggedIn} onSetUser={setUser} />
  
  return (
    <div className="bg-gradient-to-br from-amber-300 to-amber-500 h-screen">
      <NavBar loggedIn={loggedIn} onLogout={setUser}/>
      <Switch>
        <Route path="/client/signup">
          <ClientSignup onLogin={setUser} />
        </Route>
        <Route path="/project/new">
          <ProjectForm user={user}/>
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route exact path="/">
        <ClientHome user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
