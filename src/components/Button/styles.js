import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.palette.primary.contrastText};
    border: none;
    border-radius: 100px;
    box-shadow: rgba(72, 79, 95, 0.06) 0px 2.25px 10.5px;
    color: ${theme.palette.primary.main};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.button.fontSize};
    height: 48px;
    justify-content: center;
    margin: 0 auto;
    max-width: 100%;
    overflow: hidden;
    padding: 14px 30px;
    position: relative;
    text-align: center;
    transition: all 0.2s ease 0s;
    width: 300px;

    &:hover {
      background-color: ${theme.palette.primary.light};
      border: none;
      color: ${theme.palette.primary.contrastText};
    }

    &:active {
      box-shadow:
        rgba(190, 199, 214, 0.02) 0px 0.345043px 0.690086px -0.172521px,
        rgba(159, 171, 187, 0.03) 0px 0.690086px 0.862607px,
        rgba(72, 79, 95, 0.06) 0px 0.172521px 1.72521px;
    }

    span {
      margin-right: 10px;
    }

    svg {
      width: 15px;
      height: 15px;
    }
  `}
`
