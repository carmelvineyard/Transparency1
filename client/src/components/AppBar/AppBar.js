import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SignInModal from '../SignInModal';



const styles = {
  labelStyle: {
       color: '#ffffff'
    },
  }


const muiTheme = getMuiTheme({
  palette: {
    color: "#D32F2F",
  },
  appBar: {
    height: 60,
    color: "#D32F2F",
  }
  
});

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarExample = () => (
  <MuiThemeProvider muiTheme={muiTheme}>  
  <AppBar
    showMenuIconButton={false}
    title={<span style={styles.title}>Transparency</span>}
    iconElementRight={ 
     
      <SignInModal 
      label="Sign In"/>}
      
  />
 
  </MuiThemeProvider>
);

export default AppBarExample;