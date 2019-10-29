import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from './Carousel';
import CarouselButton from '../CarouselButton';

const slides = [
  {
    imgUrl: 'https;//exmaple.com/slide1.png',
    description: 'Slide1',
    attribution: 'Bob1'
  },
  {
    imgUrl: 'https;//exmaple.com/slide2.png',
    description: 'Slide2',
    attribution: 'Bob2'
  },
  {
    imgUrl: 'https;//exmaple.com/slide3.png',
    description: 'Slide3',
    attribution: 'Bob3'
  }
];

describe('Carousel', () => {
  const { container, debug } = render(<Carousel slidesData={slides} />);
  const prevButton = container.querySelectorAll('button')[0];
  const nextButton = container.querySelectorAll('button')[1];
  it('renders a Carousel', () => {
    expect(prevButton.getAttribute('data-action')).toBe('prev');
    expect(nextButton.getAttribute('data-action')).toBe('next');

    const figure = document.querySelector('figure');
    const figcaption = figure.querySelector('figcaption');
    const img = figure.querySelector('img');
    expect(figure).toBeInTheDocument();
    expect(figcaption).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBe(slides[0].imgUrl);
    expect(figure).toHaveTextContent(
      `${slides[0].description} ${slides[0].attribution}`
    );

    fireEvent.click(nextButton);

    expect(img.getAttribute('src')).toBe(slides[1].imgUrl);
    expect(figure).toHaveTextContent(
      `${slides[1].description} ${slides[1].attribution}`
    );

    fireEvent.click(nextButton);

    expect(img.getAttribute('src')).toBe(slides[2].imgUrl);
    expect(figure).toHaveTextContent(
      `${slides[2].description} ${slides[2].attribution}`
    );

    fireEvent.click(nextButton);

    expect(img.getAttribute('src')).toBe(slides[0].imgUrl);
    expect(figure).toHaveTextContent(
      `${slides[0].description} ${slides[0].attribution}`
    );

    fireEvent.click(prevButton);

    expect(img.getAttribute('src')).toBe(slides[2].imgUrl);
    expect(figure).toHaveTextContent(
      `${slides[2].description} ${slides[2].attribution}`
    );

    fireEvent.click(prevButton);

    expect(img.getAttribute('src')).toBe(slides[1].imgUrl);
    expect(figure).toHaveTextContent(
      `${slides[1].description} ${slides[1].attribution}`
    );
  });
});
