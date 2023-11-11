import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    render(<Button />)

    expect(screen.getByText(/Button/)).toBeInTheDocument()
  })
})
