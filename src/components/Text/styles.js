import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(3)};
  `}
`
