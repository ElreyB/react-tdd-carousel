import React from "react";
import { string, node, oneOfType, number } from "prop-types";
import styled from "styled-components/macro";

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${({ imgHeight }) =>
    typeof imgHeight === "number" ? `${imgHeight}px` : imgHeight};
`;

const CarouselSlide = ({
  description,
  imgUrl,
  imgHeight,
  attribution,
  ...rest
}) => (
  <figure {...rest}>
    <Img src={imgUrl} alt={description} imgHeight={imgHeight} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);

CarouselSlide.defaultProps = {
  imgHeight: 500
};

CarouselSlide.propTypes = {
  imgUrl: string.isRequired,
  className: node,
  description: string.isRequired,
  attribution: node,
  imgHeight: oneOfType([string, number])
};

export default CarouselSlide;
