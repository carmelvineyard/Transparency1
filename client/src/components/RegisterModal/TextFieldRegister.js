import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import API from '../../utils/API';

export default class TextFieldSimple extends Component {
  constructor(props) {
    super(props);
    }

 
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
          id="firstName"
          value={this.props.firstName}
          onChange={this.props.inputChange}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        
       <br />
        <TextField
        hintText="Enter Email"
        floatingLabelText="Enter Email"
        id="email"
        value={this.props.email}
        onChange={this.props.inputChange}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        underlineStyle={styles.underlineStyle}
        underlineFocusStyle={styles.underlineFocusStyle}
         />
         <br />
         
      <TextField
      hintText="Enter Zip Code"
      floatingLabelText="Enter Zip Code"
      id="zipCode"
      value={this.props.zipCode}
      onChange={this.props.inputChange}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
         />
         <br />
       
        <TextField
          hintText="Create Password"
          floatingLabelText="Password"
          type="password"
          id="password"
          value={this.props.password}
          onChange={this.props.inputChange}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
       
       
        
       
        </div>
    );
  }
}