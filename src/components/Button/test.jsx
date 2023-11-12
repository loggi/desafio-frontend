import { screen } from '@testing-library/react'

import { render } from '@/utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the Button', () => {
    const { container } = render(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
