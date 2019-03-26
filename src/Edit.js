import React, { Component } from 'react';
import Axios from 'axios';
import NavBarContent from './NavBarContent';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'


export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '', shortDescription: '', description: '', characters: ''
        }
    }

    componentDidMount() {
        this.getCharacter()
    }

    getCharacter = () => {
        Axios
            .get('https://character-database.becode.xyz/characters/' + this.props.match.params.id)
            .then(result => this.setState({
                characters: result.data
            }))
            .catch(err => console.log(err))
    }

    render() {
        

        return (
            <div>
                <NavBarContent />

                <div className="col-xs-12 col-md-6 col-xl-4 p-5 mx-auto mt-4 text-center d-flex flex-column">

                    <div className="mb-auto">
                        <img
                            className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
                            src={'data:image/jpeg;base64,' + this.state.characters.image}
                            alt={this.state.characters.name}
                            style={{ width: "100px", height: "100px" }}
                        />
                        <h4 className="border-bottom pb-3 mb-3">{this.state.characters.name}</h4>
                        <span className="text-muted-5">{this.state.characters.shortDescription}</span>
                        <div className = "border-top mt-2 pt-2 container">
                            {this.state.characters.description}
                        </div>
                    </div>

                </div>

                <Form className="m-5">
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Short Description</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={this.state.characters.description} as="textarea" rows="3" name="description" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>

                    </Form.Group>

                </Form>;
                </div>
        );
    }
}
