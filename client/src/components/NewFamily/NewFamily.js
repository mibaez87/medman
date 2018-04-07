import React, {Component} from 'react';
import moment from 'moment';
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

    handleSubmit (event, props, state){
        event.preventDefault();
        const {firstName, lastName, dob, address} = this.state;
        const formattedBirthDate = moment(dob).format('YYYYMMDD');
        this.props.search(firstName, lastName, formattedBirthDate, address);
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleBirthDateChange = (event, date) => {
        this.setState({dob: date});
    }

    render(){
        return (
            <div align="center">
            <ToolBar />
            <Card>
                <CardTitle title="Add a New Family Member" />
                <form onSubmit={(event) => this.handleSubmit(event, this.props, this.state)} >
                    <div>
                        <TextField name="firstName" value={this.state.topic} floatingLabelText="First Name" floatingLabelFixed={true} onChange={this.handleChange} />
                        <br />
                        <TextField name="lastName" value={this.state.topic} floatingLabelText="Last Name" floatingLabelFixed={true} onChange={this.handleChange} />
                        <br />
                        <DatePicker name="dob" value={this.state.startDate} floatingLabelText="Date of Birth" floatingLabelFixed={true} openToYearSelection={true} onChange={this.handleStartDateChange} />
                        <br />
                    <TextField name="address" value={this.state.topic} floatingLabelText="Address" floatingLabelFixed={true} onChange={this.handleChange} />
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