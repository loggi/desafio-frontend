import React from 'react';
import { render } from '@testing-library/react';
import LogoIcon from '@/components/LogoIcon';

describe('LogoIcon', () => {
  it('matches the snapshot', () => {
    const { container } = render(<LogoIcon />);
    expect(container).toMatchSnapshot();
  });
});
