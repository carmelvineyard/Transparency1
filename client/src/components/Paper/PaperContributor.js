import React from 'react';
import Paper from 'material-ui/Paper';
import TableContributor from '../TableSimple/TableContributor';

const style = {
  height:600,
  width: '45%',
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperContributor = () => (
    <Paper style={style} zDepth={1}>
    <TableContributor />
    </Paper>
);

export default PaperContributor;