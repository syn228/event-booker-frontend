import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar'
import List from '../components/List'
import Homepage from '../components/Homepage'
import CalendarPage from '../components/CalendarPage'
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import About from '../components/About';
import withAuthentication from '../containers/withAuthentication';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
