import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RefillCheckbox from '../RefillCheckbox/RefillCheckbox.js'
import RaisedButton from 'material-ui/RaisedButton';
import ToolBar from '../ToolBar/ToolBar.js'
import API from '../../utils/API.js'

const style = {
    margin: 12,
};

class NewPrescription extends Component {
    state = {
        medicineName: "",
        dose: "",
        usedFor: "",
        quantity: 0,
        frequency: "",
        lastPickUp: {},
        refill: false,
        nextRefill: {}
    }

    handleSubmit = event => {
        event.preventDefault();
        API.saveNewMed({
            medicineName: this.state.medicineName,
            dose: this.state.dob,
            usedFor: this.state.usedFor,
            quantity: this.state.quantity,
            frequency: this.state.frequency,
            lastPickUp: this.state.lastPickUp,
            refill: this.state.refill,
            nextRefill: this.state.nextRefill
        }).then(() => {
            return <Redirect to="/family/:id" />
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleLastPickupChange = (event, date) => {
        this.setState({ lastPickup: date });
    }

    handleNextRefillChange = (event, date) => {
        this.setState({ nextRefill: date });
    }

    render() {
        return (
            <div align="center">
                <ToolBar />
                <Card>
                    <CardTitle title="Add a New Prescription" />
                    <form onSubmit={(event) => this.handleSubmit(event, this.props, this.state)} >
                        <div>
                            <TextField name="medicineName" value={this.state.medicineName} floatingLabelText="Prescription Name" floatingLabelFixed={true} onChange={this.handleChange} />
                            <br />
                            <TextField name="dose" value={this.state.dose} floatingLabelText="Dose" floatingLabelFixed={true} onChange={this.handleChange} />
                            <br />
                            <TextField name="usedFor" value={this.state.usedFor} floatingLabelText="Used For" floatingLabelFixed={true} onChange={this.handleChange} />
                            <br />
                            <TextField name="quantity" value={this.state.quantity} floatingLabelText="Quantity" floatingLabelFixed={true} onChange={this.handleChange} />
                            <br />
                            <TextField name="frequency" value={this.state.frequency} floatingLabelText="Frequency" floatingLabelFixed={true} onChange={this.handleChange} />
                            <br />
                            <DatePicker name="lastPickup" value={this.state.lastPickup} floatingLabelText="Last Pickup Date" floatingLabelFixed={true} openToYearSelection={true} onChange={this.handleLastPickupChange} />
                            <br />
                            <RefillCheckbox name="refill" value={this.state.refill} onCheck={this.handleChange} />
                            <br />
                            <DatePicker name="nextRefill" value={this.state.nextRefill} floatingLabelText="Next Refill Pickup Date" floatingLabelFixed={true} openToYearSelection={true} onChange={this.handleNextRefillChange} />
                        </div>
                        <div>
                            <RaisedButton type="submit" label="Save" primary={true} style={style} />
                        </div>
                    </form>
                </Card>
            </div>
        );
    }
}

export default NewPrescription;