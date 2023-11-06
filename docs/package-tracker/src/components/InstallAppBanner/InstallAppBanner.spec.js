import React from 'react';
import { render } from '@testing-library/react';
import InstallAppBanner from '@/components/InstallAppBanner';

describe('InstallAppBanner', () => {
  it('matches the snapshot', () => {
    const { container } = render(<InstallAppBanner />);
    expect(container).toMatchSnapshot();
  });
});
