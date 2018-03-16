import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import DropDownMenuSimple from '../DropDownMenuSimple/DropDownMenuSimple';
import ResultsCard from "../ResultsCard";
import API from '../../utils/API'
import CircularProgress from 'material-ui/CircularProgress';


let senators = [];

let senator1 = {
  "cid": "",
  "bioguide_id": ""
};

let senator2 = {
  "cid": "",
  "bioguide_id": ""
};

class CardSearch extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      usState: "",
      senatorData: []
    });
  }

 
  onChangeDropdown = (usState) => {


    // let indivs1 = new Promise(function(resolve, reject) {
    //   API.getIndividuals("N00013873") 
    //     .then(response => {
    //       console.log("indiv response: ", response);
    //     })
    // });


    this.setState({
      status:"pending"
    });

    API.getSenators(usState)
      .then(response => {
        senators = response.data.slice(-2);
        senator1 = {"cid": senators[0]["@attributes"].cid, "bioguide_id": senators[0]["@attributes"].bioguide_id};
        senator2 = {"cid": senators[1]["@attributes"].cid, "bioguide_id": senators[1]["@attributes"].bioguide_id};
        
        console.log(senators);
        let contribs1 = new Promise(function(resolve, reject) {
         const api =  API.getIndividuals(senator1.cid) 
            .then(response => response);
            resolve (api);
        });

        let contribs2 = new Promise(function(resolve, reject) {
          const api = API.getIndividuals(senator2.cid)
            .then(response => response);
            resolve (api);
        });

        let inds1 = new Promise(function(resolve, reject) {
          const api = API.getIndustries(senator1.cid) 
            .then(response => response);
            resolve (api);
        });

        let inds2 = new Promise(function(resolve, reject) {
          const api = API.getIndustries(senator2.cid)
            .then(response => response);
            resolve (api);
        });

        let intros1 = new Promise(function(resolve, reject) {
          const api = API.getBillsIntroduced(senator1.bioguide_id) 
            .then(response => response);
            resolve (api);
        });

        let intros2 = new Promise(function(resolve, reject) {
          const api = API.getBillsIntroduced(senator2.bioguide_id)
            .then(response => response);
            resolve (api);
        });


        // Promise.all([contribs1, contribs2, inds1, inds2, intros1, intros2])
        //   .then(data => {
        //     console.log("Data: ");
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //   })

        Promise.all([contribs1, contribs2, inds1, inds2, intros1, intros2])
        .then(data => {
          console.log("Data: ", data);
        })
        .catch(function(error) {
          console.log(error);
        })

        this.setState({ senatorData: senators, status: "completed" });
      })
  }

  render() {

    return (
      <Card 
        style={{
        backgroundColor: '#efefef',
      }}>

        <CardHeader
          title="Choose a state to see senators and donors side-by-side"
          subtitle="Transparency in Government"
          avatar="icon2.png"
        />
        <CardText>
          <div>

            <DropDownMenuSimple onChange={this.onChangeDropdown} />

            {
              <div>
               <br />
                {this.state.senatorData.map((senator, index) => (
                 <ResultsCard key={index} 
                  firstlast={senator["@attributes"].firstlast} 
                  party={senator["@attributes"].party} 
                  website={senator["@attributes"].website} 
                  phone={senator["@attributes"].phone}
                  avatarID={senator["@attributes"].bioguide_id} />))}
                <br />
              </div>
            }

            { this.state.status === "pending" ? <CircularProgress  color={"#0e649d"} size={20} /> : ""}

          </div>
        </CardText>
      </Card>
    )
  }
}
export default CardSearch;
