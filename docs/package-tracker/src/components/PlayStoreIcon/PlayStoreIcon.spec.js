import React from 'react';
import { render } from '@testing-library/react';
import PlayStoreIcon from '@/components/PlayStoreIcon';

describe('PlayStoreIcon', () => {
  it('matches the snapshot', () => {
    const { container } = render(<PlayStoreIcon />);
    expect(container).toMatchSnapshot();
  });
});
