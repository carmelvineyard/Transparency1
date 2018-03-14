import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import API from '../../utils/API'

let billsIntroduced = [];

API.getBillsIntroduced()
  .then(response => {
    billsIntroduced = response.data.bills
    console.log(billsIntroduced)
  })


  
 
export default class TableBill extends Component {

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
<div>
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
        <TableHeaderColumn>Bill Number</TableHeaderColumn>
        <TableHeaderColumn>Bill Title</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody
     displayRowCheckbox={this.state.showCheckboxes}>


        {billsIntroduced.map((bill, index) => 
            (<TableRow key={index}>
            <TableRowColumn>{bill.number}</TableRowColumn> 
            <TableRowColumn> {<a href={bill.congressdotgov_url}> {bill.short_title} </a>} </TableRowColumn>
             </TableRow>
            ))}



    </TableBody>
  </Table> 
  </div> 
)

}
}