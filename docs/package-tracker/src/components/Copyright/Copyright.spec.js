import React from 'react';
import { render } from '@testing-library/react';
import Copyright from '@/components/Copyright';

describe('Copyright', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Copyright />);
    expect(container).toMatchSnapshot();
  });
});
