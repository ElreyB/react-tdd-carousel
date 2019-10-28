import React, { useState, useEffect } from 'react';
import { array } from 'prop-types';
import CarouselButton from '../CarouselButton';
import CarouselSlide from '../CarouselSlide';

const Carousel = ({ slidesData, ...rest }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const handlePrevButton = () =>
    setSlideIndex((slideIndex + slides.length - 1) % slides.length);
  const handleNextButton = () =>
    setSlideIndex((slideIndex + slides.length + 1) % slides.length);

  useEffect(() => setSlides(slidesData), [slides]);
  return (
    <div {...rest}>
      <CarouselButton data-action='prev' onClick={handlePrevButton}>
        Prev
      </CarouselButton>
      {slides.length > 0 && <CarouselSlide {...slides[slideIndex]} />}
      <CarouselButton data-action='next' onClick={handleNextButton}>
        Next
      </CarouselButton>
    </div>
  );
};

Carousel.propTypes = {
  slidesData: array.isRequired
};

export default Carousel;
