import styled from '@emotion/styled'
import { css } from '@emotion/react'

const WrapperModifier = {
  visibleWrapper: () => css`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 99;
    width: 100%;
  `,
  visibleImg: () => css`
    z-index: 999;
  `
}

export const Wrapper = styled.div`
  ${({ theme, visible }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    ${visible && WrapperModifier.visibleWrapper(theme)};

    img {
      width: 64px;
      height: 64px;

      ${visible && WrapperModifier.visibleImg(theme)};
    }
  `}
`

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`
