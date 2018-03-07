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
          hintText="Enter Email"
          floatingLabelText="Enter Email"
          fullWidth={true}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        <br />
        <br />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
          fullWidth={true}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
      
        </div>
    );
  }
}