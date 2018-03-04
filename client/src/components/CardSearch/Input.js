import React from 'react';
import TextField from 'material-ui/TextField';
import {red700, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: red700,
  },
  underlineStyle: {
    borderColor: blue500,
  },
  floatingLabelStyle: {
    color: blue500,
  },
  floatingLabelFocusStyle: {
    color:red700,
  },
};

const Input = () => (
  <div>
    <TextField
      hintText="Styled Hint Text"
      hintStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom error color"
      errorText="This field is required."
      errorStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom Underline Color"
      underlineStyle={styles.underlineStyle}
    /><br />
    <TextField
      hintText="Custom Underline Focus Color"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
    <TextField
      floatingLabelText="Styled Floating Label Text"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    />
  </div>
);

export default Input;