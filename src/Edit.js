import React, { Component } from 'react';
import axios from 'axios';
import NavBarContent from './NavBarContent';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.onChangeCharacterName = this.onChangeCharacterName.bind(this);
        this.onChangeShortDescr = this.onChangeShortDescr.bind(this);
        this.onChangeLongDescr = this.onChangeLongDescr.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.input = React.createRef();

        this.state = {
            error: null,
            isLoaded: false,
            name: '',
            shortDescription: '',
            description: '',
            image: '',
            file: '',
            imagePreviewUrl: ''
        }
    }

    /*api mount*/
    componentDidMount() {
        axios.get("https://character-database.becode.xyz/characters/" + this.props.match.params.id)
            .then(
                (response) => {
                    //console.log(JSON.stringify(response.data));
                    this.setState({
                        name: response.data.name,
                        shortDescription: response.data.shortDescription,
                        description: response.data.description,
                        //image : response.data.image.substr(this.image.indexOf(',') + 1)
                        image: response.data.image,
                    });
                    //console.log(response.data.image);
                })
            .catch(function (error) {
                console.log(error);
            })
    }

    /*fct to setStage on change*/
    onChangeCharacterName(e) {
        this.setState({
            name: e.target.value
        });
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
        let output = document.getElementById('output-img');
        //console.log(output);
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

    /*fct submit + update the api */
    onSubmit(e) {
        e.preventDefault();
        /*check if image has been selected otherwise take the previous one*/
        if (!this.state.imagePreviewUrl) {
            this.state.imagePreviewUrl = this.state.image;
        }
        else {
            this.state.imagePreviewUrl = this.state.imagePreviewUrl;
        }
        /*check if no empty fieds*/
        if (this.state.name && this.state.shortDescription && this.state.description && this.state.imagePreviewUrl) {
            const obj = {
                name: this.state.name,
                shortDescription: this.state.shortDescription,
                description: this.state.description,
                image: this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
            };
            axios.put('https://character-database.becode.xyz/characters/' + this.props.match.params.id, obj)
                .then(
                    this.props.history.push("/")
                );
        }
        else {
            alert("No empty field allowed");
        }
    }

    render() {


        return (
            <div>
                <NavBarContent />
                <Button className="mt-5 w-100 btn btn-danger" to="/" onClick={(e) => { if (window.confirm('Do you want leave the character adding?')) this.props.history.push("/"); }}>Cancel</Button>
                <div className="col-xs-12 col-md-6 col-xl-4 p-5 mx-auto mt-4 text-center d-flex flex-column">

                    <div className="mb-auto">
                        <img
                            className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
                            src={'data:image/jpeg;base64,' + this.state.image}
                            alt={this.state.name}
                            style={{ width: "100px", height: "100px" }}
                        />
                        <h4 className="border-bottom pb-3 mb-3">{this.state.name}</h4>
                        <span className="text-muted-5">{this.state.shortDescription}</span>
                        <div className="border-top mt-2 pt-2 container">
                            {this.state.description}
                        </div>
                    </div>

                </div>

                <div>
                    
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
                                <div className="grid-container-img-add">
                                    <div className="file"><input className="form-control-file" type="file" name="image" id="UploadedFile" onChange={(e) => this.onChangeImg(e)} /></div>
                                    <div className="preview"><img id="output-img" className="output" alt="" src={`data:image/jpeg;base64,${this.state.image}`} /></div>
                                </div>
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>;
                </div>
            </div>
        );
    }
}
