import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import API from '../../utils/API';

export default class TextFieldSimple extends Component {
  constructor(props) {
    super(props);

      this.state=({
        firstname: '',
        email: '',
        zip: '', 
        password:'',
        confirm: ''
      });
    }

  handleChange = (event) => {
    console.log(event.target.id);
    const name=event.target.id;
    this.setState({
      [name]: event.target.value,
    });
  };
  
 


  handleSubmit = () => {

    const userInfo = { 
    firstName: this.state.firstName,
    email: this.state.email,
    zipCode: this.state.zipCode, 
    password: this.state.password
    }

  API.newLogin (userInfo);
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
          value={this.state.firstName}
          onChange={this.handleChange}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        
       
        <TextField
        hintText="Enter Email"
        floatingLabelText="Enter Email"
        id="email"
        value={this.state.email}
        onChange={this.handleChange}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        underlineStyle={styles.underlineStyle}
        underlineFocusStyle={styles.underlineFocusStyle}
         />
        
         
      <TextField
      hintText="Enter Zip Code"
      floatingLabelText="Enter Zip Code"
      id="zipCode"
      value={this.state.zipCode}
      onChange={this.handleChange}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
         />
       
       
        <TextField
          hintText="Create Password"
          floatingLabelText="Password"
          type="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        
        <TextField
          hintText="Confirm Password"
          floatingLabelText="Password"
          type="password"
          id="confirm"
          value={this.state.confirm}
          onChange={this.handleChange}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        
       
        </div>
    );
  }
}