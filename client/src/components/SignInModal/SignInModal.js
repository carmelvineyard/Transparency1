import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextFieldSignin from '../TextFieldSimple';
import TextFieldSignup from '../RegisterModal/TextFieldRegister';



export default class SignInModal extends Component {
  state = {
    open: false,
    isLoggedIn: true
  };

  handleOpen = () => { this.setState({ open: true }); }

  handleClose = () => { this.setState({ open: false }); }

  signUp = () => {
    // TODO
    // Register
    // Signin

    this.setState({
      isLoggedIn: false
    });

    // isLoggedIn
    // true = Login
    // false = Register
  };

  signIn = () => {
    // TODO
    // UI Sign in
    this.setState({
      isLoggedIn: true
    });
  };




  render() {
    const styles = {
      labelStyle: {
        color: '#2196F3'
      }
    }

    // isLoggedIn
    // true = Login
    // false = Register

    const {
      isLoggedIn,
      open
    } = this.state;


    const actions = [
      <FlatButton
        label="Cancel"
        default={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label={isLoggedIn ? "Sign In" : "Sign up"}
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
        labelStyle={styles.labelStyle}
      />
    ];

   const onClick = () => {
      this.setState({
        value:'',
      });
    };

    return (
      <div className="container-fluid">
        <FlatButton onClick={this.handleOpen} label="Sign In" />
        <Dialog
          title={isLoggedIn ? "Sign in" : "Sign up"}
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.handleClose}
        >

          {isLoggedIn
            ? <p>Don't have an account yet? <FlatButton onClick={this.signUp} label="Register" /> </p>
            :
            <p>Already have an account? <FlatButton onClick={this.signIn} label="Signin" /> </p>}

          {isLoggedIn ? <TextFieldSignin /> : <TextFieldSignup />}



        </Dialog>
      </div>
    );
  }
}