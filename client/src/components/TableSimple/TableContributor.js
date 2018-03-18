import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


export default class TableContributor extends Component {


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
      height: '600px',
      expanded: false,
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
              <TableHeaderColumn>Top Contributors to Senator</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}>
            {this.props.contribData.data.contributor.map((contribData, index) => 
              (<TableRow key={index}>
                <TableRowColumn>{contribData["@attributes"].org_name}</TableRowColumn> 
                <TableRowColumn>{"$" + contribData["@attributes"].total}</TableRowColumn> 
              </TableRow>
            ))}
          </TableBody>
        </Table> 
      </div> 
    )

  }
}