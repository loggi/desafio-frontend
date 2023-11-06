import React from 'react';
import { render } from '@testing-library/react';
import FormInput from '@/components/FormInput';

describe('FormInput', () => {
  it('matches the snapshot', () => {
    const { container } = render(<FormInput />);
    expect(container).toMatchSnapshot();
  });
});
