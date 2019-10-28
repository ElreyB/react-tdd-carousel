import React from 'react';
import { node, func } from 'prop-types';

const CarouselButton = props => <button {...props} />;

CarouselButton.propTypes = {
  children: node.isRequired,
  onClick: func
};

CarouselButton.defaultProps = {
  type: 'button',
  children: 'I am a button'
};

export default CarouselButton;
