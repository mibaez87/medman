import React from 'react';
// import "./style.css";
import {Link} from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: 12,
};

const SignUp = (props)=> {
	return (
		<div align="center">
		<Card>
			<CardTitle title="Sign up to start using Medman" />
			<Link to = "/" >Already signed up? Go to Login</Link>
			<form name="/auth/signup" onSubmit={props.handleSubmit}>
				<div>
					<TextField floatingLabelText="Email" floatingLabelFixed={true} type="email" name="username" value={props.username} className="user" onChange={props.handleChange} />
				</div>
				<div>
					<TextField floatingLabelText="Password" floatingLabelFixed={true} type="password" name="password" value={props.password} className="password" onChange={props.handleChange} />
				</div>
				<div>
					<RaisedButton type="submit" label="Sign Up" primary={true} style={style} />
				</div>
			</form>
		</Card>
		</div>
	);
}

export default SignUp;