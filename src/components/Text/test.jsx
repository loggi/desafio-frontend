import { screen } from '@testing-library/react'

import { render } from '@/utils/tests/helpers'

import Text from '.'

describe('<Text />', () => {
  it('should render the Text', () => {
    const { container } = render(<Text>Text</Text>)

    expect(screen.getByText(/Text/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
