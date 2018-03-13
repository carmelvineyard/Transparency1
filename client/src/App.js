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
//   })

// {individuals.map((individual, index) => (<List key={index} name={individual["@attributes"].org_name} total={individual["@attributes"].total} />))}



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
