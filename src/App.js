import React, { Component } from 'react';
import HomePage from './pages/HomePage/HomePage'
import StatisticPage from './pages/StatisticPage/StatisticPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ContactDetails from './pages/ContactDetails/ContactDetails'
import ContactEditPage from './pages/ContactEditPage/ContactEditPage'
import SignupPage from './pages/SignupPage/SignupPage'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus, faArrowCircleLeft, faUserEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faUserPlus, faArrowCircleLeft, faUserEdit)

@inject('store')
@observer
class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="app">
            <div className="main-nav">
              <div className="flex nav-btn-container">
                <Link className="nav-btn" to="/">Home</Link>
                <Link className="nav-btn" to="/contact">Contacts</Link>
                <Link className="nav-btn" to="/statistics">Statistics</Link>
              </div>
            </div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/contact/edit" component={ContactEditPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/statistics" component={StatisticPage} />
              <Route path="/contact/edit/:id?" component={ContactEditPage} />
              <Route path="/contact/:id" component={ContactDetails} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
