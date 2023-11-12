import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

import * as S from './styles'

const Button = ({ children, ...props }) => (
  <S.Wrapper as="button" {...props}>
    <span>{children}</span>
    <ChevronRightIcon />
  </S.Wrapper>
)

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button
