import PropTypes from 'prop-types'
import Image from 'next/image'

import * as S from './styles'

const Loading = ({ visible }) => (
  <S.Wrapper visible={visible}>
    {visible && <S.Backdrop />}
    <Image
      src="/assets/icons/spinner.svg"
      alt="Carregando"
      width={32}
      height={32}
    />
  </S.Wrapper>
)

Loading.propTypes = {
  visible: PropTypes.bool
}

export default Loading
