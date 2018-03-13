import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import DropDownMenuSimple from '../DropDownMenuSimple/DropDownMenuSimple';
import ResultsCard from "../ResultsCard";
import API from '../../utils/API'
import CircularProgress from 'material-ui/CircularProgress';


let senators = [];


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
                {this.state.senatorData.map((senator, index) => (<ResultsCard key={index} firstlast={senator["@attributes"].firstlast} party={senator["@attributes"].party} />))}
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
