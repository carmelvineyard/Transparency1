import React from 'react';
import Paper from 'material-ui/Paper';
import TableIndustry from '../TableSimple/TableIndustry';

const style = {
  height:600,
  width: 450,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperIndustry = (props) => {

  return (
    <Paper style={style} zDepth={1}>
    <TableIndustry 
      indusData= {props.indusData}/>
    </Paper>)
};

export default PaperIndustry;