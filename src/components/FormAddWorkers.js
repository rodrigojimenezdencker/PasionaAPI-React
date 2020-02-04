import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class FormAddWorkers extends Component {
    constructor(props) {
        super(props)

        this.state = {
           photo: "",
           name: "",
           mail: "",
           address: ""
        }
    }

    handleAddWorker = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChangeInput = (event) => {
        this.setState( { [event.target.id]: event.target.value})
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="photo">Photo</Label>
                    <Input onChange={this.handleChangeInput} type="text" id="photo" value={this.state.photo} />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input onChange={this.handleChangeInput} type="text" id="name" value={this.state.name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="mail">Mail</Label>
                    <Input onChange={this.handleChangeInput} type="text" id="mail" value={this.state.mail} />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input onChange={this.handleChangeInput} type="text" id="address" value={this.state.address} />
                </FormGroup>
                <Button onClick={this.handleAddWorker}>Submit</Button>
            </Form>
        )
    }
}
