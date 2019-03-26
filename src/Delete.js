import React, { Component } from 'react';
import axios from 'axios';
import NavBarContent from './NavBarContent';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            shortDescription: '',
            description: '',
            image: ''
        }

        const { name } = this.state;
    }


    /*fct to delete characters*/
    deleteCharacter(e) {
        console.log(e)
        axios.delete("https://character-database.becode.xyz/characters/" + e)
            .then(res => console.log(res.data));
    }

    render() {


        return (
            <div>
                <NavBarContent />

                <Card bg="warning" text="white" className="w-100">
                    <Card.Header>Confirmation</Card.Header>
                    <Card.Body>
                        <Card.Title>Delete Content</Card.Title>
                        <Card.Text>
                            Are you sure to delete this character ?
        </Card.Text>
                    </Card.Body>
                </Card>
                <Link className="linkto" to={`/`}><Button className="border w-100" variant="danger" to="/" onClick={(e) => { this.deleteCharacter(this.props.match.params.id) }}>Yes</Button></Link>
                <Link className="border linkto" to={`/`}><Button className="w-100" variant="primary" >No</Button></Link>

            </div>
        );
    }
}
