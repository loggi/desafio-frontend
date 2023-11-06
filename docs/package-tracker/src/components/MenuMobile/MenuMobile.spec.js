import React from 'react';
import { render } from '@testing-library/react';
import MenuMobile from '@/components/MenuMobile';

describe('MenuMobile', () => {
  it('matches the snapshot', () => {
    const toggleDrawer = jest.fn();
    const { container } = render(<MenuMobile toggleDrawer={toggleDrawer} />);
    expect(container).toMatchSnapshot();
  });
});
