import React, { Component } from 'react';
// import "./style.css";
// import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavMenu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

class ToolBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <IconMenu value={this.state.value} onChange={this.handleChange}
            iconButtonElement={
              <IconButton touch={true}>
                <NavMenu />
              </IconButton>
            }
          >
            <MenuItem value={1} primaryText="Household Members" />
            <MenuItem value={2} primaryText="Prescriptions" />
            <MenuItem value={3} primaryText="Pharmacies" />
          </IconMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="MedMan"/>
          <ToolbarSeparator />
          <RaisedButton label="Logout" primary={true} onClick={this.props.handleLogout} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default ToolBar;