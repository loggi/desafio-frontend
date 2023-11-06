import React from 'react';
import { render } from '@testing-library/react';
import HighlightBanner from '@/components/HighlightBanner';

describe('HighlightBanner', () => {
  it('matches the snapshot', () => {
    const { container } = render(<HighlightBanner />);
    expect(container).toMatchSnapshot();
  });
});
