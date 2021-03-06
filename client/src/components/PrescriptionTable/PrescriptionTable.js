import React, { Component } from 'react';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class PrescriptionTable extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px'
  };

  handleChange = (event) => {
    this.setState({ height: event.target.value });
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="The Medicine Name">Prescription</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Dose">Dose</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Use(s)">Used For</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Quantity">Quantity</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Frequency">Frequency</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Last Pickup Date">Last Pickup</TableHeaderColumn>
              <TableHeaderColumn tooltip="Is a Refill Available?">Refill Available</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Next Refill Date">Next Refill</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.prescriptions.map((row, index) => (
              < TableRow key={index} >
                <TableRowColumn>{row.medicineName}</TableRowColumn>
                <TableRowColumn>{row.dose}</TableRowColumn>
                <TableRowColumn>{row.usedFor}</TableRowColumn>
                <TableRowColumn>{row.quantity}</TableRowColumn>
                <TableRowColumn>{row.frequency}</TableRowColumn>
                <TableRowColumn>{moment(new Date(row.lastPickup)).format('dddd[,] MM[/]DD[/]YY')}</TableRowColumn>
                <TableRowColumn>{row.refill}</TableRowColumn>
                <TableRowColumn>{moment(new Date(row.nextRefill)).format('dddd[,] MM[/]DD[/]YY')}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}