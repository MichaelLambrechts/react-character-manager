import React, { Component } from 'react';
import axios from 'axios';
import NavBarContent from './NavBarContent';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default class Add extends Component {

    constructor(props) {
        super(props);
        this.onChangeCharacterName = this.onChangeCharacterName.bind(this);
        this.onChangeShortDescr = this.onChangeShortDescr.bind(this);
        this.onChangeLongDescr = this.onChangeLongDescr.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            shortDescription: '',
            description: '',
            image: ''
        }

        const { name } = this.state;
    }

    /*fct to setStage on change*/
    onChangeCharacterName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeShortDescr(e) {
        this.setState({
            shortDescription: e.target.value
        })
    }
    onChangeLongDescr(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeImg(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        let output = document.getElementById('output');

        //base64 convert
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            //file preview
            output.src = reader.result
        }
        reader.readAsDataURL(file)
    }


    onSubmit(i) {
        i.preventDefault();
        /*check if no empty fieds*/
        if (this.state.name && this.state.shortDescription && this.state.description && this.state.imagePreviewUrl) {
            const obj = {
                name: this.state.name,
                shortDescription: this.state.shortDescription,
                description: this.state.description,
                image: this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
            };
            axios.post('https://character-database.becode.xyz/characters/', obj)
                .then(
                    this.props.history.push("/")
                );
            console.log(obj);
            this.setState({
                name: '',
                shortDescription: '',
                description: '',
                image: '',
                show: ''
            })
        }
        else {
            alert("No empty field allowed");
        }

    }

    render() {


        return (
            <div>
                <NavBarContent />
                <Button className="btn btn-danger" to="/" onClick={(e) => { if (window.confirm('Do you want leave the character adding?')) this.props.history.push("/"); }}>Cancel</Button>
                <Form className="m-5" onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={this.onChangeCharacterName} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control type="text" onChange={this.onChangeShortDescr} type="text" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.onChangeLongDescr} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <div className="grid-container-img-add">
                            <div className="file"><input className="form-control-file" type="file" name="image" id="UploadedFile" onChange={(e) => this.onChangeImg(e)} /></div>
                            <div className="preview"><img id="output" className="output" alt="" /></div>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>;
                </div>
        );
    }
}
