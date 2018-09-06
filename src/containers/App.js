import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar'
import List from '../components/List'
import Homepage from '../components/Homepage'
import CalendarPage from '../components/CalendarPage'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Homepage} />   
          <Route exact path="/calendar" component={(props) => <CalendarPage {...props} />} />
          <Route exact path="/list" component={(props) => <List {...props} />} />
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
