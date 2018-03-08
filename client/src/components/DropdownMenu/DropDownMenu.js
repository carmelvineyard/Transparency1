import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from "axios";


const styles = {
  customWidth: {
    width: 450,
  },
};

export default class DropDownMenuSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => {this.setState({state: value})};

  render() {
    return (
      <div>
        
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem name='default' value={1} primaryText="Select A State" />
          <MenuItem name ='AL' value='AL' primaryText="Alabama" />
          <MenuItem name ='AK' value={3} primaryText="Alaska" />
          <MenuItem name = 'AZ' value={4} primaryText="Arizona" />
          <MenuItem name = 'AR' value={5} primaryText="Arkansas" />
          <MenuItem name = 'CA' value={6} primaryText="California" />
          <MenuItem name = 'CO' value={7} primaryText="Colorado" />
          <MenuItem name = 'DE' value={8} primaryText="Delaware" />
          <MenuItem name = 'FL' value={9} primaryText="Florida" />
          <MenuItem name = 'GA' value={10} primaryText="Georgia" />
          <MenuItem name = 'HI' value={11} primaryText="Hawaii" />
          <MenuItem name = 'ID' value={12} primaryText="Idaho" />
          <MenuItem name = 'KS' value={13} primaryText="Kansas" />
          <MenuItem name = 'KY' value={14} primaryText="Kentucky" />
          <MenuItem name = 'LA' value={15} primaryText="Louisiana" />
          <MenuItem name = 'ME' value={16} primaryText="Maine" />
          <MenuItem name = 'MD' value={17} primaryText="Maryland" />
          <MenuItem name = 'MA' value={18} primaryText="Massacheusetts" />
          <MenuItem name = 'MI' value={19} primaryText="Michigan" />
          <MenuItem name = 'MN' value={20} primaryText="Minnesota" />
          <MenuItem name = 'Ms' value={21} primaryText="Mississippi" />
          <MenuItem name = 'MT' value={22} primaryText="Montana" />
          <MenuItem name = 'NE' value={23} primaryText="Nebraska" />
          <MenuItem name = 'NV' value={24} primaryText="Nevada" />
          <MenuItem name = 'NH' value={25} primaryText="New Hampshire" />
          <MenuItem name = 'NJ' value={26} primaryText="New Jersey" />
          <MenuItem name = 'NM' value={27} primaryText="New Mexico" />
          <MenuItem name = 'NY' value={28} primaryText="New York" />
          <MenuItem name = 'NC' value={29} primaryText="North Carolina" />
          <MenuItem name = 'ND' value={30} primaryText="North Dakota" />
          <MenuItem name = 'OH' value={31} primaryText="Ohio" />
          <MenuItem name = 'OK' value={32} primaryText="Oklahoma" />
          <MenuItem name = 'OR' value={33} primaryText="Oregan" />
          <MenuItem name = 'PA' value={34} primaryText="Pennsylvania" />
          <MenuItem name = 'RI' value={35} primaryText="Rhode Island" />
          <MenuItem name = 'SC' value={36} primaryText="South Carolina" />
          <MenuItem name = 'SD' value={37} primaryText="South Dakota" />
          <MenuItem name = 'TN' value={38} primaryText="Tennessee" />
          <MenuItem name = 'TX' value={39} primaryText="Texas" />
          <MenuItem name = 'UT' value={40} primaryText="Utah" />
          <MenuItem name = 'VT' value={41} primaryText="Vermont" />
          <MenuItem name = 'VA' value={42} primaryText="Virginia" />
          <MenuItem name = 'WA' value={43} primaryText="Washington" />
          <MenuItem name = 'WV' value={44} primaryText="West Virginia" />
          <MenuItem name = 'WI' value={45} primaryText="Wisconsin" />
          <MenuItem name = 'WY' value={46} primaryText="Wyoming" />

          













        </DropDownMenu>
      </div>
    );
  }
}

