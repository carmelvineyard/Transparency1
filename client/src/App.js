import React, { Component } from 'react';
import './App.css';
import AppBarExample from './components/AppBar';
import CardSearch from './components/CardSearch/CardSearch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from './components/Footer/Footer';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBarExample />
          <CardSearch />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
