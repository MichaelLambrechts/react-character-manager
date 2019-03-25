import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

export default class NavBarContent extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      Character Database
    </Navbar.Brand>
  </Navbar>
    );
  }
}
