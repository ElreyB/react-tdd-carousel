import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import CarouselSlide from './CarouselSlide';

describe('CarouselSlide', () => {
  const props = {
    imgUrl: 'https://example.com/image.png',
    description: 'slide',
    attribution: 'author'
  };
  it('renders a <CarouselSlide>', () => {
    const { container } = render(
      <CarouselSlide
        imgUrl='https://example.com/image.png'
        description='slide'
        attribution='author'
      />
    );
    const figure = container.querySelector('figure');
    const figcaption = figure.querySelector('figcaption');
    const img = figure.querySelector('img');

    expect(figure).toBeInTheDocument();
    expect(figcaption).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBe(props.imgUrl);
    expect(figure).toHaveTextContent('slide author');
  });

  it('Img', () => {
    const { container } = render(
      <CarouselSlide
        imgUrl='https://example.com/image.png'
        description='slide'
        attribution='author'
        imgHeight='600px'
      />
    );
    const figure = container.querySelector('figure');
    const figcaption = figure.querySelector('figcaption');
    const img = figure.querySelector('img');
    expect(img).not.toHaveStyleRule('height', '500px');
    expect(img).toHaveStyleRule('height', '600px');
  });
});
