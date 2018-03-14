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

let industries = [];

API.getIndustries()
      .then(response => {
        industries = response.data.industry
      })

      let individuals = [];

API.getIndividuals()
  .then(response => {
    individuals = response.data.contributor
  })


 

 
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

     {industries.map((industry, index) => 
        (<TableRow key={index}>
        <TableRowColumn>{industry["@attributes"].industry_name}</TableRowColumn>
        <TableRowColumn>{"$" + industry["@attributes"].total}</TableRowColumn>
        </TableRow>
        ))}
    </TableBody>
  </Table> 
  
  
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
     {individuals.map((individual, index) => 
    (<TableRow key={index}>
    <TableRowColumn>{individual["@attributes"].org_name}</TableRowColumn> 
    <TableRowColumn>{"$" + individual["@attributes"].total}</TableRowColumn> 
    </TableRow>
    ))}

    </TableBody>
  </Table> 
  </div> 
)

}
}