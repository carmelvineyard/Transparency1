import React from 'react';
import Paper from 'material-ui/Paper';
import TableContributor from '../TableSimple/TableContributor';

const style = {
  height:600,
  width: 450,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperContributor = (props) => {

  return (
    <Paper style={style} zDepth={1}>
      <TableContributor 
        contribData= {props.contribData}/>
    </Paper>)
};

export default PaperContributor;