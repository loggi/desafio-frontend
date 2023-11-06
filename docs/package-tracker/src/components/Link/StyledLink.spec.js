import React from 'react';
import { render } from '@testing-library/react';
import Link from '@/components/Link';

describe('Link', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Link />);
    expect(container).toMatchSnapshot();
  });
});
