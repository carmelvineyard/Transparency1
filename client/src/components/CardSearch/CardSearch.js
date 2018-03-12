import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import DropDownMenuSimple from '../DropDownMenuSimple/DropDownMenuSimple';
import ResultsCard from "../ResultsCard";
import API from '../../utils/API'

let senators=[];

API.getSenators()
.then(response => {
  senators = response.data.slice(-2);
  console.log("API response", senators);
})



class CardSearch extends Component{
  
state = {show: false};



onChangeDropdown = ()=> {
  this.setState({show:true});
}
 
  render()
  {
    return (
      <Card>
        <CardHeader
         title="Choose a state to see senators and donors side-by-side"
          subtitle="Transparency"
          avatar="icon2.png"
        />
        <CardText>
          <div>

          <DropDownMenuSimple onChange={this.onChangeDropdown}/>
           {this.state.show?
          <div>
           {senators.map((senator, index) => (<ResultsCard key={index}  firstlast = {senator["@attributes"].firstlast} party = {senator["@attributes"].party}/>))} 
          <br />
          </div> 
           :null}
            </div>  
       </CardText>
    </Card>
    )
  }
}
export default CardSearch;
