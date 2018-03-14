import React from 'react';
import Paper from 'material-ui/Paper';
import TableContributor from '../TableSimple/TableContributor';
import TableIndustry from '../TableSimple/TableIndustry';

const style = {
  height:300,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperContributor = () => (
    <Paper style={style} zDepth={1}>
    <TableContributor />
    </Paper>
);

export default PaperContributor;