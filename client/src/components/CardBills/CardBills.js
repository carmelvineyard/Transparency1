import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TableBill from "../TableSimple/TableBill"



export default class CardBills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          expanded: false,
        };
      }
    
    
      handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
      };
    
      handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
      };
    
      handleExpand = () => {
        this.setState({expanded: true});
      };
    
      handleReduce = () => {
        this.setState({expanded: false});
      };

render() {

return (
<div>
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={"Bills Introduced by this Senator"}
          actAsExpander={true}
          showExpandableButton={true}
          titleStyle={{ fontSize: '16px' }} 
        />
        <CardTitle 
       
        expandable={true} />
        <CardText expandable={true}>
            <div>
            <TableBill />
            </div>
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onClick={this.handleExpand} />
          <FlatButton label="Reduce" onClick={this.handleReduce} />
        </CardActions>
      </Card>
     </div> 
)
}
}