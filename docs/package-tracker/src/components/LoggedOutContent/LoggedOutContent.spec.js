import React from 'react';
import { render } from '@testing-library/react';
import LoggedOutContent from '@/components/LoggedOutContent';

describe('LoggedOutContent', () => {
  it('matches the snapshot', () => {
    const { container } = render(<LoggedOutContent />);
    expect(container).toMatchSnapshot();
  });
});
