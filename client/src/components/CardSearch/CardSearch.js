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

    this.setState({
      status:"pending"
    });

    API.getSenators(usState)
      .then(response => {
        senators = response.data.slice(-2);
        senator1 = {"cid": senators[0]["@attributes"].cid, "bioguide_id": senators[0]["@attributes"].bioguide_id};
        senator2 = {"cid": senators[1]["@attributes"].cid, "bioguide_id": senators[1]["@attributes"].bioguide_id};
        console.log("Senator1: ", senator1);
        console.log("Senator2: ", senator2);
        this.setState({ senatorData: senators, status: "completed" });
      })
  }

  render() {

    return (
      <Card>

        <CardHeader
          title="Choose a state to see senators and donors side-by-side"
          subtitle="Transparency"
          avatar="icon2.png"
        />
        <CardText>
          <div>

            <DropDownMenuSimple onChange={this.onChangeDropdown} />

            {
              <div>
              <br />
                {this.state.senatorData.map((senator, index) => (<ResultsCard key={index} firstlast={senator["@attributes"].firstlast} party={senator["@attributes"].party} website={senator["@attributes"].website} phone={senator["@attributes"].phone} />))}
                <br />
              </div>
            }

            { this.state.status === "pending" ? <CircularProgress /> : ""}

          </div>
        </CardText>
      </Card>
    )
  }
}
export default CardSearch;
