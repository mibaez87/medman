import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import ToolBar from '../ToolBar/ToolBar.js'

const style = {
    margin: 12,
};

class NewFamily extends Component {
    state = {
        firstName: "",
        lastName: "",
        dob: {},
        address: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newMember = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            address: this.state.address
        };
        this.setState({
            firstName: "",
            lastName: "",
            dob: {},
            address: ""
        });
        const { name } = event.target;
        axios.post(name, newMember).then((data) => {
            const { firstName, lastName, dob, address } = data.data;
            const formattedBirthDate = moment(dob).format('YYYYMMDD');
            this.setState({
                firstName: firstName,
                lastName: lastName,
                dob: formattedBirthDate,
                address: address
            })
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleBirthDateChange = (event, date) => {
        this.setState({ dob: date });
    }

    render() {
        return (
            <div align="center">
                <ToolBar />
                <Card>
                    <CardTitle title="Add a New Family Member" />
                    <form onSubmit={(event) => this.handleSubmit(event, this.props, this.state)} >
                        <div>
                            <TextField name="firstName" value={this.state.firstName} floatingLabelText="First Name" floatingLabelFixed={true} onChange={this.handleChange} />
                            <br />
                            <TextField name="lastName" value={this.state.lastName} floatingLabelText="Last Name" floatingLabelFixed={true} onChange={this.handleChange} />
                            <br />
                            <DatePicker name="dob" value={this.state.dob} floatingLabelText="Date of Birth" floatingLabelFixed={true} openToYearSelection={true} onChange={this.handleBirthDateChange} />
                            <br />
                            <TextField name="address" value={this.state.address} floatingLabelText="Address" floatingLabelFixed={true} onChange={this.handleChange} />
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

export default NewFamily;