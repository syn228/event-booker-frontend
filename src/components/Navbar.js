import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
        <NavLink className="item tabs" exact to="/home">Home</NavLink>
        </header>
      </div>
    );
  }
}

export default Navbar;