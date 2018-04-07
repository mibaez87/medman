import React from 'react';
// import "./style.css";
import { Link } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: 12,
};

const SignIn = (props) => {
	return (
		<div align="center">
		<Card>
			<CardTitle title="Welcome to Medman" />
			<Link to="/signup" >First time? Go to Sign Up</Link>
			<form>
				<div>
					<TextField floatingLabelText="Email" type="email" name="username" value={props.username} className="user" onChange={props.handleChange} />
				</div>
				<div>
					<TextField floatingLabelText="Password" type="password" name="password" value={props.password} className="password" onChange={props.handleChange} />
				</div>
				<div>
					<RaisedButton type="submit" label="Login" name="/auth/signin" onClick={props.handleSubmit} primary={true} style={style} />
				</div>
			</form>
		</Card>
		</div>
	);
}

export default SignIn;