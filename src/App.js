import './App.css';
import Header from './components/header/header.component';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Team from './pages/team/team.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/approach' component={HomePage} />
        <Route path='/team' component={Team} />
      </Switch>
    </div>
  );
}

export default App;
