import React, { Component } from 'react';

import './App.css';
import API from './utils/API'

import NavBarContent from './NavBarContent'
import CardContent from './CardContent'




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      shortDescription: null,
      image: null,
    }
  }

  render() {
    const { isLoading, name, shortDescription, image } = this.state;
    

    return (
      <div className="App">
        <NavBarContent />
        
        <CardContent isLoading={isLoading} name={name} shortDescription={shortDescription} image={image} />;
      </div>
    );
  }

  async componentDidMount() {
    let characterData = await API.get('/', {
      params: {
        inc: 'name, shortDescription, image'
      }
    });

    
    characterData = characterData.data[0];
    const name = characterData.name;
    const shortDescription = characterData.shortDescription;
    const image = characterData.image;

    this.setState({
      ...this.state, ...{
        isLoading: false,
        name,
        shortDescription,
        image
      }

    });
  }
}



export default App;
