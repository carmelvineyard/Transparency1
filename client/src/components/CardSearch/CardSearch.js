import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import DropDownMenu from '../DropdownMenu';
import ResultsCard from "../ResultsCard"



class CardSearch extends Component{
  
  //onDropdownChange(){
    //call to the API
    //axios.get ('/path', data)
    //.then((response) => {
    //  this.setState({senator: response.data.senator})

    //})
  //}

  render(){
    
    return (
    <Card>
      <CardHeader
        title="Choose a state to see senators and donors side-by-side"
        subtitle="Transparency"
        avatar="icon2.png"
      />
        <CardText>
          <DropDownMenu onChange={this.onDropodownChange} />
            
            <ResultsCard />
            <br />
            <ResultsCard />
            
      </CardText>
    </Card>
    )
  };
} 

  
export default CardSearch;

