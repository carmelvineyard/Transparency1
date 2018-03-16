import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const styles = {
  customWidth: {
    width: 450,
  }
};

export default class DropDownMenuSimple extends Component {
 
  constructor(props) {
    super(props);
    this.state = ({
      usState: 1, 
      senatorData: {}
  });
  }

  
  handleChange = (event, index, value) => {
    this.setState({usState: value});
    this.props.onChange();
    this.props.onChange(value);
  }



  render() {


    return (
      <div>
        <DropDownMenu
          value={this.state.usState}
         // onChange={this.props.onChange}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
          show="false"
          id="DropDown"
          underlineStyle={{ borderColor: '#0e649d' }}
          iconStyle={{ fill: '#0e649d' }}
          labelStyle={{ color: '#0e649d' }}
        >
          <MenuItem  value={1} primaryText="Select a State" />
          <MenuItem name = 'AL' value={"AL"} primaryText="Alabama" />
          <MenuItem name ='AK' value={"AK"} primaryText="Alaska" />
          <MenuItem name = 'AZ' value={"AZ"} primaryText="Arizona" />
          <MenuItem name = 'AR' value={'AR'} primaryText="Arkansas" />
          <MenuItem name = 'CA' value={'CA'} primaryText="California" />
          <MenuItem name = 'CO' value={'CO'} primaryText="Colorado" />
          <MenuItem name = 'CO' value={'CT'} primaryText="Connecticut" />
          <MenuItem name = 'DE' value={'DE'} primaryText="Delaware" />
          <MenuItem name = 'FL' value={'FL'} primaryText="Florida" />
          <MenuItem name = 'GA' value={'GA'} primaryText="Georgia" />
          <MenuItem name = 'HI' value={'HI'} primaryText="Hawaii" />
          <MenuItem name = 'ID' value={'ID'} primaryText="Idaho" />
          <MenuItem name = 'IL' value={'IL'} primaryText="Illinois" />
          <MenuItem name = 'IN' value={'IN'} primaryText="Indiana" />
          <MenuItem name = 'IA' value={'IA'} primaryText="Iowa" />
          <MenuItem name = 'KS' value={'KS'} primaryText="Kansas" />
          <MenuItem name = 'KY' value={'KY'} primaryText="Kentucky" />
          <MenuItem name = 'LA' value={'LA'} primaryText="Louisiana" />
          <MenuItem name = 'ME' value={'ME'} primaryText="Maine" />
          <MenuItem name = 'MD' value={'MD'} primaryText="Maryland" />
          <MenuItem name = 'MA' value={'MA'} primaryText="Massachusetts" />
          <MenuItem name = 'MI' value={'MI'} primaryText="Michigan" />
          <MenuItem name = 'MN' value={'MN'} primaryText="Minnesota" />
          <MenuItem name = 'MS' value={'MS'} primaryText="Mississippi" />
          <MenuItem name = 'MO' value={'MO'} primaryText="Missouri" />
          <MenuItem name = 'MT' value={'MT'} primaryText="Montana" />
          <MenuItem name = 'NE' value={'NE'} primaryText="Nebraska" />
          <MenuItem name = 'NV' value={'NV'} primaryText="Nevada" />
          <MenuItem name = 'NH' value={'NH'} primaryText="New Hampshire" />
          <MenuItem name = 'NJ' value={'NJ'} primaryText="New Jersey" />
          <MenuItem name = 'NM' value={'NM'} primaryText="New Mexico" />
          <MenuItem name = 'NY' value={'NY'} primaryText="New York" />
          <MenuItem name = 'NC' value={'NC'} primaryText="North Carolina" />
          <MenuItem name = 'ND' value={'ND'} primaryText="North Dakota" />
          <MenuItem name = 'OH' value={'OH'} primaryText="Ohio" />
          <MenuItem name = 'OK' value={'OK'} primaryText="Oklahoma" />
          <MenuItem name = 'OR' value={'OR'} primaryText="Oregon" />
          <MenuItem name = 'PA' value={'PA'} primaryText="Pennsylvania" />
          <MenuItem name = 'RI' value={'RI'} primaryText="Rhode Island" />
          <MenuItem name = 'SC' value={'SC'} primaryText="South Carolina" />
          <MenuItem name = 'SD' value={'SD'} primaryText="South Dakota" />
          <MenuItem name = 'TN' value={'TN'} primaryText="Tennessee" />
          <MenuItem name = 'TX' value={'TX'} primaryText="Texas" />
          <MenuItem name = 'UT' value={'UT'} primaryText="Utah" />
          <MenuItem name = 'VT' value={'VT'} primaryText="Vermont" />
          <MenuItem name = 'VA' value={'VA'} primaryText="Virginia" />
          <MenuItem name = 'WA' value={'WA'} primaryText="Washington" />
          <MenuItem name = 'WV' value={'WV'} primaryText="West Virginia" />
          <MenuItem name = 'WI' value={'WI'} primaryText="Wisconsin" />
          <MenuItem name = 'WY' value={'WY'} primaryText="Wyoming" />
        </DropDownMenu>
        
      </div>
    );
  }
}

