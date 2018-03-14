import React from 'react';
import {List, ListItem} from 'material-ui/List';
import FontIconCircle from './../icons/FontIconCircle';


const styles = {
  leftIcon: {
       color: '#000000',
       style: 'disc'
    }
  }

const ListSimple = () => (
  <div>
    <List>
      <ListItem primaryText={"Test"} rightIcon={<FontIconCircle />}  />
      
      </List>
    </div>
);

export default ListSimple;