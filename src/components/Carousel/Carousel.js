import React, { useState, useEffect } from "react";
import { arrayOf, string, shape, node } from "prop-types";
import CarouselButton from "../CarouselButton";
import CarouselSlide from "../CarouselSlide";

const Carousel = ({ slidesData, defaultImgHeight, ...rest }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const handlePrevButton = () =>
    setSlideIndex((slideIndex + slides.length - 1) % slides.length);
  const handleNextButton = () =>
    setSlideIndex((slideIndex + slides.length + 1) % slides.length);

  useEffect(() => setSlides(slidesData), [slidesData]);

  return (
    <div {...rest}>
      <CarouselButton data-action="prev" onClick={handlePrevButton}>
        Prev
      </CarouselButton>
      {slides.length > 0 && (
        <CarouselSlide {...slides[slideIndex]} imgHeight={defaultImgHeight} />
      )}
      <CarouselButton data-action="next" onClick={handleNextButton}>
        Next
      </CarouselButton>
    </div>
  );
};

Carousel.defaultProps = {
  defaultImgHeight: CarouselSlide.defaultProps.imgHeight
};

Carousel.propTypes = {
  slidesData: arrayOf(
    shape({ description: string, attribution: node, imgUrl: string })
  ).isRequired,
  defaultImgHeight: CarouselSlide.propTypes.imgHeight
};

export default Carousel;
