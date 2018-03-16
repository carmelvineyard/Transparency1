import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PaperIndustry from '../Paper/PaperIndustry';
import PaperContributor from '../Paper/PaperContributor';
import CardBills from "../CardBills/CardBills"



export default class ResultsCard extends React.Component {
  

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
      <Card 
      
      expanded={this.state.expanded} 
      onExpandChange={this.handleExpandChange}>
        <CardHeader
          avatar={
            <img style={{ width: 80}} alt="Senator" src={`https://www.congress.gov/img/member/${this.props.avatarID.toLowerCase()}.jpg`} />
          }
          
           
          title={this.props.firstlast}
          subtitle={this.props.party === "R" ? "Republican" : "Democrat"}
          actAsExpander={true}
          showExpandableButton={true}
          titleStyle={{ fontSize: '20px' }} 
        />
        <CardTitle 
        titleStyle={{ fontSize: '18px' }}
        title={this.props.phone} 
        subtitle= {<a href = {this.props.website}> {this.props.website} </a>}
        expandable={true} />
        <CardText expandable={true}>
            <div>
            <PaperContributor/>
            <PaperIndustry/>
            </div>
            <CardBills />
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onClick={this.handleExpand} />
          <FlatButton label="Reduce" onClick={this.handleReduce} />
        </CardActions>
      </Card>
      <br />
      <br />

      
</div>
    );
  }
}