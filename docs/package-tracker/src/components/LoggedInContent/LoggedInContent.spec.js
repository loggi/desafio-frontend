import React from 'react';
import { render } from '@testing-library/react';
import LoggedInContent from '@/components/LoggedInContent';

describe('LoggedInContent', () => {
  it('matches the snapshot', () => {
    const { container } = render(<LoggedInContent />);
    expect(container).toMatchSnapshot();
  });
});
