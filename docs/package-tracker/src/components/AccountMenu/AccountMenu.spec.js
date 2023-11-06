import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccountMenu from '@/components/AccountMenu';

describe('AccountMenu', () => {
  it('matches the snapshot', () => {
    const { container } = render(<AccountMenu />);
    expect(container).toMatchSnapshot();
  });
});
