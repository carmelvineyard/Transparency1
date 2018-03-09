import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextFieldRegister from './TextFieldRegister';


export default class RegisterModal extends Component {
 componentWillReceiveProps(){
     let status = this.props;
 }
 
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
      label="Register"
      primary={true}
      keyboardFocused={true}
      onClick={this.handleClose}
      labelStyle={styles.labelStyle}
      
    />,
  ];
      return (
          <div className="container-fluid">
          <FlatButton onClick={this.handleOpen} label="Register" />
              <Dialog
                  title="Register"
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                  >
               <p>Already have an account? <FlatButton onClick={this.handleClosed} label="Sign In" /> </p>   
             <TextFieldRegister />
                 
              </Dialog>
          </div>
      );
  }
}