import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {red700, blue500} from 'material-ui/styles/colors';

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

const Input = () => (
  <div>
    <TextField
      floatingLabelText="Search by either Bill Name, Legislator Name, Donor Name or Zip Code"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      fullWidth={true}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
    />
  </div>
);


const style = {

};

const RaisedButtonExample = () => (
  <div>
    <RaisedButton label="Search" backgroundColor='#2196F3' />
  </div>
);



const CardSearch = () => (
  <Card>
    <CardHeader
      title="Search to see your legislators and donors side-by-side"
      subtitle="Transparency"
      avatar="icon2.png"
    />
    <CardText>
      <Input /> 
      <RaisedButtonExample />
     
    </CardText>
    
  </Card>
);
export default CardSearch;

