import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class TableIndustry extends Component {

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
        height: '600px'
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
              <TableHeaderColumn>Top Industries to Senator</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}>
            {this.props.indusData.data.industry.map((indusData, index) => 
                (<TableRow key={index}>
                <TableRowColumn>{indusData["@attributes"].industry_name}</TableRowColumn>
                <TableRowColumn>{"$" + indusData["@attributes"].total}</TableRowColumn>
                </TableRow>
                ))}
          </TableBody>
        </Table> 
      </div> 
    )

  }
}