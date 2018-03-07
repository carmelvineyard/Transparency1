import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const FontIconDonor = () => (
  <div>
    <FontIcon className="material-icons" style={iconStyles} color={blue500}>currency-usd</FontIcon>
  </div>
);

export default FontIconDonor;
