import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  it('calls the provided action function when clicked', () => {
    const action = jest.fn();
    const buttonText = 'Click me';

    render(<Button action={action}>{buttonText}</Button>);

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(action).toHaveBeenCalled();
  });
});
