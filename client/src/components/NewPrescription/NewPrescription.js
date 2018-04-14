import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import ActionRenew from 'material-ui/svg-icons/action/autorenew';
// import RefillCheckbox from '../RefillCheckbox/RefillCheckbox.js'
import RaisedButton from 'material-ui/RaisedButton';
import ToolBar from '../ToolBar/ToolBar.js';
import API from '../../utils/API.js';

const style = {
    margin: 12,
};

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

class NewPrescription extends Component {
    state = {
        _familyMemberId: "",
        medicineName: "",
        dose: "",
        usedFor: "",
        quantity: 0,
        frequency: "",
        lastPickup: {},
        refill: false,
        nextRefill: {},
        saved: false
    }

    handleSubmit = event => {
        event.preventDefault();
        API.saveNewMed(this.props.match.params.id, {
            _familyMemberId: this.props.match.params.id,
            medicineName: this.state.medicineName,
            dose: this.state.dose,
            usedFor: this.state.usedFor,
            quantity: this.state.quantity,
            frequency: this.state.frequency,
            lastPickup: this.state.lastPickup,
            refill: this.state.refill,
            nextRefill: this.state.nextRefill
        }).then(() => {
            this.setState({ saved: true })
        }).catch(err => console.log(err));
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

    updateCheck = () => {
        this.setState((oldState) => {
            return {
                refill: !oldState.checked,
            };
        });
    }

    render() {
        const isSaved = this.state.saved;
        if (isSaved) {
            return <Redirect to={"/family/" + this.props.match.params.id} />
        } else {
            return (
                <div align="center">
                    <ToolBar />
                    <Card>
                        <CardTitle title="Add a New Prescription" />
                        <form onSubmit={(event) => this.handleSubmit(event, this.props, this.state)} >
                            <div style={styles.block}> 
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
                                <Checkbox name="refill" label="Refill(s) Available" checked={this.state.refill} onCheck={this.updateCheck} checkedIcon={<ActionRenew />} style={styles.checkbox} />
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
}

export default NewPrescription;