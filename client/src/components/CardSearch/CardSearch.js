import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import DropDownMenuSimple from '../DropDownMenuSimple/DropDownMenuSimple';
import ResultsCard from "../ResultsCard";
import API from '../../utils/API';
import CircularProgress from 'material-ui/CircularProgress';
class CardSearch extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      usState: "",
      senatorData: [],
      senIDs: [],
      table_data: [],
    });
  }
  onChangeDropdown = (usState) => {
    if (this.state.usState === usState) {
      return
    }
    this.setState({
      status: "pending",
      usState: usState
    });
    API.getSenators(usState)
      .then(response => {
        const senators = response.data.slice(-2);
        this.setState({ senatorData: senators })
        senators.forEach((senator, index) => {
          const person = {...senator,
            cid: senator["@attributes"].cid,
            bioguide_id: senator["@attributes"].bioguide_id
          }
          this.getFullSenatorInfo(person, index)
        });
      })
  }
  getFullSenatorInfo(person, index) {
    let contributors = new Promise(function (resolve, reject) {
      const api = API.getIndividuals(person.cid)
        .then(response => response);
      resolve(api);
    })
    let industries = new Promise(function (resolve, reject) {
      const api = API.getIndustries(person.cid)
        .then(response => response);
      resolve(api);
    })
    let introduced = new Promise(function (resolve, reject) {
      const api = API.getBillsIntroduced(person.bioguide_id)
        .then(response => response);
      resolve(api);
    });
    Promise.all([contributors, industries, introduced])
      .then(data => { 
        const contributors = data[0];
        const industries = data[1];
        const billsIntroduced = data[2];
        const senator = {
          ...person,
          contributors: contributors,
          industries: industries,
          billsIntroduced: billsIntroduced
        }
        const senators = [...this.state.senatorData]
        senators[index] = senator
        this.setState({ senatorData: senators })
        
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  isReadyToRender() {
    const senators = this.state.senatorData;
    if (!senators.length) {
      return false;
    }
    const isNotFinished = senators.filter((senator) => {
      return !senator.contributors;
    })

    if (isNotFinished.length === 0) { 
      return true;
    } else {
      return false;
    }
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
            <div>
              <br />
              {this.isReadyToRender() ?
                this.state.senatorData.map((senator, index) => (
                  <ResultsCard key={index}
                    firstlast={senator["@attributes"].firstlast}
                    party={senator["@attributes"].party}
                    website={senator["@attributes"].website}
                    phone={senator["@attributes"].phone}
                    avatarID={senator["@attributes"].bioguide_id}
                    contribData={senator.contributors}
                    indusData={senator.industries}
                    introData={senator.billsIntroduced} />))
                : null}
              
            </div>
            {!this.isReadyToRender() && this.state.usState.length > 0 ? <CircularProgress color={"#0e649d"} size={20} /> : null}
            
          </div>
        </CardText>
      </Card>
    )
  }
}
export default CardSearch;