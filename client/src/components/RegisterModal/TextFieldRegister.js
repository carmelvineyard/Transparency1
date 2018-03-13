import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldSimple extends Component {
  
  
  render(){
      
    const styles = {
      floatingLabelFocusStyle: {
          color: '#2196F3'
      },
      underlineStyle: {
        borderColor: '#2196F3'
      },
      underlineFocusStyle: {
        borderColor: '#2196F3'
      }
    }
   
    
    return (

      <div>
        <TextField
          hintText="Enter First Name"
          floatingLabelText="Enter First Name"
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        <br />
        <br />
        <TextField
        hintText="Enter Email"
        floatingLabelText="Enter Email"
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        underlineStyle={styles.underlineStyle}
        underlineFocusStyle={styles.underlineFocusStyle}
         />
         <br />
         <br />
      <TextField
      hintText="Enter Zip Code"
      floatingLabelText="Enter Zip Code"
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
         />
        <br />
        <br />
        <TextField
          hintText="Create Password"
          floatingLabelText="Password"
          type="password"
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        <br />
        <br />
        <TextField
          hintText="Confirm Password"
          floatingLabelText="Password"
          type="password"
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        <br />
        <br />
        <br />
        <br />
        </div>
    );
  }
}