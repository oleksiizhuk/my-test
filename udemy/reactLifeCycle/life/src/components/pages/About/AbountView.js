import React from 'react';
import Proptypes from 'prop-types';
const AboutView = ({
  currentValue
}) => {
  return (
    <h2>{currentValue}</h2>
  );
};

AboutView.prototype = {
  currentValue: Proptypes.objectOf({
    currentValue: Proptypes.number
  })
};

export default AboutView;
