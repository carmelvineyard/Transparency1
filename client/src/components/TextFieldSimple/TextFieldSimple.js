import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldSimple extends Component {
  
  constructor(props) {
    super(props);

    this.state = ({
      email: '', 
      password:''
    });
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  
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
          id="email"
          value={this.state.value}
          onChange={this.handleChange}
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
          id="password"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
      
        </div>
    );
  }
}