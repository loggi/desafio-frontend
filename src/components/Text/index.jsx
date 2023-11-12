import PropTypes from 'prop-types'

import * as S from './styles'

const Text = ({ tag = 'p', children, ...props }) => (
  <S.Wrapper as={tag} {...props}>
    {children}
  </S.Wrapper>
)

Text.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Text
