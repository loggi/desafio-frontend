import React from 'react';
import { render } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
