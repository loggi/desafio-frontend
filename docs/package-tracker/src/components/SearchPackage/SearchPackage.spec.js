import React from 'react';
import { render } from '@testing-library/react';
import SearchPackage from '@/components/SearchPackage';

jest.mock('@/locales/searchPackage', () => ({
  TITLE: 'Test Title',
  SUBTITILE: 'Test Subtitle',
  LABEL: 'Test Label',
  BUTTON: 'Test Button',
}));

describe('SearchPackage component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<SearchPackage />);
    expect(container).toMatchSnapshot();
  });
});
