import { render, screen } from '@testing-library/react'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the Loading', () => {
    const { container } = render(<Loading visible />)

    expect(screen.getByRole('img', { name: /Carregando/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
