import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CarouselSlide from './CarouselSlide';

describe('CarouselSlide', () => {
  it('renders a <CarouselSlide>', () => {
    const props = {
      imgLink: 'https://example.com/image.png',
      description: 'slide',
      attribution: 'author'
    };
    const { container, getAllByText, debug } = render(
      <CarouselSlide
        imgLink='https://example.com/image.png'
        description='slide'
        attribution='author'
      />
    );
    debug();
    const figure = document.querySelector('figure');
    const figcaption = document.querySelector('figcaption');
    const img = figure.querySelector('img');

    expect(figure).toBeInTheDocument();
    expect(figcaption).not.toBeNull();
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe(props.imgLink);
    expect(figcaption.textContent).toBe('slide author');
  });
});
