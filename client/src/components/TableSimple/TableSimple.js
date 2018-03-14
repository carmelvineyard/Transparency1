import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';



export default class TableSimple extends Component {

    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: true,
        showRowHover: false,
        selectable: false,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        displayRowCheckbox: false,
        showCheckboxes: false,
        height: '300px'
      };

render() {

return (
  <Table
    selectable={this.state.selectable}
    height={this.state.height}
    fixedHeader={this.state.fixedHeader}
    fixedFooter={this.state.fixedFooter}
     >

    <TableHeader
    displaySelectAll={this.state.showCheckboxes}
    adjustForCheckbox={this.state.showCheckboxes}
    enableSelectAll={this.state.enableSelectAll}
     >

      <TableRow>
        <TableHeaderColumn>Donor</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>Industry</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody
        displayRowCheckbox={this.state.showCheckboxes}
     >
      <TableRow>
        <TableRowColumn>{'test donor name'}</TableRowColumn>
        <TableRowColumn>{'test donor amount'}</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>{'test industry name'}</TableRowColumn>
        <TableRowColumn>{'test donor amount'}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
)

}
}