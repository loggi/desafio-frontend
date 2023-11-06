import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '@/components/Navigation';

describe('Navigation component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
