import React, { Component } from 'react';
import './App.css';
import AppBarExample from './components/AppBar';
import CardSearch from './components/CardSearch/CardSearch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import API from './utils/API.js'


// let industries = [];

// API.getIndustries()
//       .then(response => {
//         industries = response.data.industry
//       })

// {industries.map((industry, index) => (<ResultsCard key={index} name={industry["@attributes"].industry_name} total={industry["@attributes"].total} />))}


/////////////////////////////////////////

// let individuals = [];

// API.getIndividuals()
//   .then(response => {
//     individuals = response.data.contributor
//     console.log(individuals)
//   })

// {individuals.map((individual, index) => (<List key={index} name={individual["@attributes"].org_name} total={individual["@attributes"].total} />))}


///////////////////////////////////////

// let billsCo = [];

// API.getBillsCo()
//   .then(response => {
//     billsCo = response.data.bills
//     console.log(billsCo)
//   })

// {billsCo.map((cobill, index) => (<InsertComp key={index} number={cobill.number} title={cobill.short_title} url={cobill.congressdotgov_url}/>))}


///////////////////////////////////////

// let billsIntroduced = [];

// API.getBillsIntroduced()
//   .then(response => {
//     billsIntroduced = response.data.bills
//     console.log(billsIntroduced)
//   })

// {billsIntroduced.map((bill, index) => (<InsertComp key={index} number={bill.number} title={bill.short_title} url={bill.congressdotgov_url} />))}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarExample />
          <CardSearch />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
