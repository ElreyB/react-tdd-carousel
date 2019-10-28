import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CarouselButton from './CarouselButton';

describe('CarouselButton', () => {
  it('renders a <button>', () => {
    const text = 'I am a button';
    const dataAction = 'prev';
    const { container, debug } = render(
      <CarouselButton data-action={dataAction} />
    );
    const button = container.querySelector('button');
    expect(button).toHaveTextContent(text);
    expect(button).toHaveAttribute('type', 'button');
    expect(button.getAttribute('data-action')).toBe(dataAction);
  });
});
