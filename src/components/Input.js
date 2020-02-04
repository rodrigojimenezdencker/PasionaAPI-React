import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson, resetPeople } from '../actions';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const mapDispatchToProps = {
    addPerson, resetPeople
}

class connectedInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number_people: 1,
            gender: "",
            nationality: ""
        }
    }

    handleChangeInput = event => {
        this.setState({ [event.target.id]: [event.target.value] });
    }

    handleGetWorker = () => {
        this.props.addPerson();
    }

    handleReset = () => {
        this.props.resetPeople();
        this.setState({ number_people: 1 });
    }

    render() {
        return (
            <>
                <FormGroup>
                    <Link to="/add"><Button color="primary" className="mr-2">ADD WORKER</Button></Link>
                </FormGroup>
                <FormGroup>
                    <Label for="number_people">People: </Label>
                    <Input type="text" id="number_people" value={this.state.number_people} onChange={this.handleChangeInput} placeholder="Number of people" />
                </FormGroup>
                <FormGroup>
                    <Button color="primary" className="mr-2" onClick={this.handleGetWorker}>GET WORKER</Button>
                    <Button color="danger" className="ml-2 mr-2" onClick={this.handleReset}>RESET</Button>
                </FormGroup>
            </>
        )
    };
}

const CustomInput = connect(null, mapDispatchToProps)(connectedInput);
export default CustomInput;