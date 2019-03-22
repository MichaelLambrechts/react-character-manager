import React, { Component } from 'react';

import './App.css';

import NavBarContent from './NavBarContent'
import CardContent from './CardContent'
import Axios from 'axios';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      characters: []
    }
  }

  componentDidMount() {
    this.getCharacter()
  }

  getCharacter = () => {
    Axios
      .get('https://character-database.becode.xyz/characters')
      .then(result => this.setState({
        characters: result.data
      }))
      .catch(err => console.log(err))
  }

  render() {

    return (
      <div className="App">
        <NavBarContent />

        <CardContent sendData={this.state.characters} />;
      </div>
    );
  }

}



export default App;