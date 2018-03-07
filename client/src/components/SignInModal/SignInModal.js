import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextFieldSimple from '../TextFieldSimple';


export default class SignInModal extends Component {
  componentWillMount(){
      this.state = {open:false};
  }

  handleOpen = () => {this.setState({open:true});}
  

  handleClose = ()=> {this.setState({open:false});}

  render() {
    const styles = {
      labelStyle: {
          color: '#2196F3'
      }
    }

      const actions = [
        <FlatButton
        label="Cancel"
        default={true}
        onClick={this.handleClose}
        />,
    <FlatButton
      label="Sign In"
      primary={true}
      keyboardFocused={true}
      onClick={this.handleClose}
      labelStyle={styles.labelStyle}
      
    />,
  ];
      return (
          <div className="container-fluid">
          <FlatButton onClick={this.handleOpen} label="Sign In" />
              <Dialog
                  title="Sign in"
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                  >
               <p>Don't have an account yet? <FlatButton label="Register" /> </p>   
             <TextFieldSimple />
                 
              </Dialog>
          </div>
      );
  }
}