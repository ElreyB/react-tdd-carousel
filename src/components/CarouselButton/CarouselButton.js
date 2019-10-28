import React from 'react';
import { node, func } from 'prop-types';

const CarouselButton = props => {
  return <button {...props} />;
};

CarouselButton.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired
};

CarouselButton.defaultProps = {
  type: 'button'
};

export default CarouselButton;
