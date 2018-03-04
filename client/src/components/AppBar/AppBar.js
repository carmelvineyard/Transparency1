import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    color: "#D32F2F",
  },
  appBar: {
    height: 150,
    color: "#D32F2F",
  },
});

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarExample = () => (
  <MuiThemeProvider muiTheme={muiTheme}>  
  <AppBar
    title={<span style={styles.title}>Transparency</span>}
    onTitleClick={handleClick}
    iconElementRight={<FlatButton label="Sign In" />}
  />
  </MuiThemeProvider>
);

export default AppBarExample;