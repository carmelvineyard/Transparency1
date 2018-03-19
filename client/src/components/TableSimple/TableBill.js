import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


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
        height: '1000px'
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
              <TableHeaderColumn>Top 20 Bills</TableHeaderColumn>
              <TableHeaderColumn>Bill Title</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
          displayRowCheckbox={this.state.showCheckboxes}>
              {this.props.introData.data.bills.map((bill, index) => 
                  (<TableRow key={index}>
                  <TableRowColumn>{bill.number}</TableRowColumn> 
                  <TableRowColumn> {<a href={bill.congressdotgov_url} target="_blank"> {bill.short_title} </a>} </TableRowColumn>
                  </TableRow>
                  ))}

          </TableBody>
        </Table> 
      </div> 
    )

  }
}