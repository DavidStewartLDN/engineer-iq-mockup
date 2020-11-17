import './App.css';
import Header from './components/header/header.component';

import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Team from './pages/team/team.component';
import Contact from './pages/contactpage/contactpage.component';
import Footer from './components/footer/footer.component';
import CaseStudiesPage from './pages/casestudies/casestudies.component';
import ServicesPage from './pages/servicespage/servicespage.component';

function App() {
  return (
    <HashRouter basename='/'>
      <div className='app-container'>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/approach' component={HomePage} />
          <Route path='/team' component={Team} />
          <Route path='/services' component={ServicesPage} />
          <Route path='/studies' component={CaseStudiesPage} />
          <Route path='/contactus' component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
