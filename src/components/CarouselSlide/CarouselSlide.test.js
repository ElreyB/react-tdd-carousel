import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarouselSlide from './CarouselSlide';

describe('CarouselSlide', () => {
  it('renders a <CarouselSlide>', () => {
    const props = {
      imgLink: 'https://example.com/image.png',
      description: 'slide',
      attribution: 'author'
    };
    const { container } = render(
      <CarouselSlide
        imgLink='https://example.com/image.png'
        description='slide'
        attribution='author'
      />
    );
    const figure = document.querySelector('figure');
    const figcaption = figure.querySelector('figcaption');
    const img = figure.querySelector('img');

    expect(figure).toBeInTheDocument();
    expect(figcaption).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBe(props.imgLink);
    expect(figure).toHaveTextContent('slide author');
  });
});
