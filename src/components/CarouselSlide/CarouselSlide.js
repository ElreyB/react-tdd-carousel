import React from 'react';
import { string, node } from 'prop-types';

const CarouselSlide = ({ className, description, imgLink, attribution }) => (
  <figure className={className}>
    <img src={imgLink} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  imgLink: string.isRequired,
  className: node,
  description: string.isRequired,
  attribution: string
};

export default CarouselSlide;
