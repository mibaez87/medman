import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NewFamily from "./components/NewFamily/NewFamily.js";
import PrescriptionHome from "./components/PrescriptionHome/PrescriptionHome.js";
import NewPrescription from './components/NewPrescription/NewPrescription.js';


class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    }
  };

  componentWillMount() {
    axios.get("/auth/isAuthenticated").then((result) => {
      const { userId, isAuthenticated, username } = result.data
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    // console.log(event.target);
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    });
    const { name } = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username } = data.data;
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result) => {
      this.setState({
        auth: {
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Route exact path="/" render={() => {
              if (loggedIn) {
                return <Redirect to="/home" auth={this.state.auth} />
              } else {
                return <SignIn
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  username={this.state.username}
                  password={this.state.password}
                />
              }
            }} />
            {/* <Route exact path="/saved" render={()=> <SavedArticles />} */}
            <Route exact path="/signup" render={() => {
              if (loggedIn) {
                return <Redirect to="/home" auth={this.state.auth} />
              } else {
                return <SignUp
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  username={this.state.username}
                  password={this.state.password}
                />
              }
            }} />
            <Route exact path="/addfamily" render={() => {
              if (loggedIn) {
                return <NewFamily add={this.addFamily} auth={this.state.auth} handleLogout={this.handleLogout} />
              } else {
                return <Redirect to="/" />
              }
            }} />
            <Route exact path="/family/:id" render={(props) => {
              if (loggedIn) {
                return <PrescriptionHome {...props} auth={this.state.auth} handleLogout={this.handleLogout} />
              } else {
                return <Redirect to="/" />
              }
            }} />
            <Route exact path="/addprescription/:id" render={(props) => {
              if (loggedIn) {
                return <NewPrescription {...props} add={this.addPrescription} auth={this.state.auth} handleLogout={this.handleLogout} />
              } else {
                return <Redirect to="/" />
              }
            }} />
            <Route exact path="/home" render={() => {
              if (!loggedIn) {
                return <Redirect to="/" />
              } else {
                return <Home handleLogout={this.handleLogout} auth={this.state.auth} />
              }
            }
            } />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;