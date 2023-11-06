import React from 'react';
import { render } from '@testing-library/react';
import AppStoreIcon from '@/components/AppStoreIcon';

describe('AppStoreIcon', () => {
  it('matches the snapshot', () => {
    const { container } = render(<AppStoreIcon />);
    expect(container).toMatchSnapshot();
  });
});
