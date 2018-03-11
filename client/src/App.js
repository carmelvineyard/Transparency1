import React, { Component } from 'react';
import './App.css';
import AppBarExample from './components/AppBar';
import CardSearch from './components/CardSearch/CardSearch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import API from './utils/API'

API.getSenators()
.then(response => {
  console.log("API response", response);

})

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
