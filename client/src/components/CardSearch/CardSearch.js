import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {red700, blue500} from 'material-ui/styles/colors';
import DropDownMenu from '../DropdownMenu';

const styles = {
  errorStyle: {
    color: red700,
  },
  underlineStyle: {
    borderColor: blue500,
  },
  underlineFocusStyle: {
    borderColor: blue500,
  },
  floatingLabelStyle: {
    color: blue500,
  },
  floatingLabelFocusStyle: {
    color:blue500,
  },
};

const CardSearch = () => (
  <Card>
    <CardHeader
      title="Choose a state to see legislators and donors side-by-side"
      subtitle="Transparency"
      avatar="icon2.png"
    />
    <CardText>
      
    <DropDownMenu /> 
    </CardText>
    
  </Card>
);
export default CardSearch;

