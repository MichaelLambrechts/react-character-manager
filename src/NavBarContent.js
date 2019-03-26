import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { HashRouter as Router, Route, Link } from "react-router-dom";

export default class NavBarContent extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
    <Link className="linkto" to={`/`}>Characters DataBase</Link>
    </Navbar.Brand>
  </Navbar>
    );
  }
}
