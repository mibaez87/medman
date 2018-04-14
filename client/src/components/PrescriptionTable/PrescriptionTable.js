import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const tableData = [
  {
    medicineName: 'Gabapentin',
    dose: '300mg',
    usedFor: 'Nerve pain',
    quantity: 90,
    frequency: 'Take 1 daily',
    lastPickup: Date.now,
    refill: false,
    nextRefill: 'N/A'
  },
  {
    medicineName: 'Citalopram',
    dose: '20mg',
    usedFor: 'Depression',
    quantity: 90,
    frequency: 'Take 1 daily',
    lastPickup: Date.now,
    refill: true,
    nextRefill: Date.now
  }
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
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
    height: '300px',
  };

  componentDidMount(){
    
  }

  handleChange = (event) => {
    this.setState({height: event.target.value});
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
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.medicineName}</TableRowColumn>
                <TableRowColumn>{row.dose}</TableRowColumn>
                <TableRowColumn>{row.usedFor}</TableRowColumn>
                <TableRowColumn>{row.quantity}</TableRowColumn>
                <TableRowColumn>{row.frequency}</TableRowColumn>
                <TableRowColumn>{row.lastPickup}</TableRowColumn>
                <TableRowColumn>{row.refill}</TableRowColumn>
                <TableRowColumn>{row.nextRefill}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}