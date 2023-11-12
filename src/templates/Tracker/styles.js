import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.palette.primary.main};
    padding: ${theme.spacing(4)} ${theme.spacing(3)} 0;
    color: ${theme.palette.primary.contrastText};

    .MuiFormControl-root {
      margin-bottom: ${theme.spacing(4)};
    }

    .MuiInputLabel-root {
      color: ${theme.palette.primary.contrastText};

      &.Mui-focused {
        color: ${theme.palette.primary.contrastText};
      }
    }

    .MuiInputBase-root {
      color: ${theme.palette.primary.contrastText};

      &:before {
        border-bottom-color: ${theme.palette.primary.contrastText};
      }

      &:hover:not(.Mui-disabled, .Mui-error):before {
        border-bottom: 1px solid ${theme.palette.primary.contrastText};
      }

      &:after {
        border-bottom: 1px solid ${theme.palette.primary.contrastText};
        color: ${theme.palette.primary.contrastText};
      }
    }

    @media (min-width: 768px) {
      padding-bottom: ${theme.spacing(4)};
    }
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 920px;
    margin: 0 auto;

    @media (min-width: 768px) {
      display: flex;
      align-items: start;
      gap: ${theme.spacing(8)};
    }
  `}
`

export const Form = styled.form`
  position: relative;
`

export const TrackerArea = styled.div`
  ${({ theme }) => css`
    background: ${theme.palette.primary.light};
    padding: ${theme.spacing(3)};
    border-radius: 25px;

    @media (min-width: 992px) {
      max-width: 380px;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(4)};

    @media (min-width: 768px) {
      padding-top: ${theme.spacing(3)};

      h2,
      p {
        margin-bottom: ${theme.spacing(4)};
      }
    }

    @media (min-width: 992px) {
      display: flex;
      position: relative;
    }
  `}
`

export const Box = styled.div`
  @media (min-width: 992px) {
    max-width: 285px;
    position: relative;
    z-index: 1;

    a {
      text-decoration: none;
    }

    button {
      width: auto;
    }
  }
`

export const Image = styled.img`
  ${({ theme }) => css`
    display: block;
    max-width: 100%;
    height: auto;
    margin-top: ${theme.spacing(4)};

    @media (min-width: 768px) {
      display: none;
    }

    @media (min-width: 992px) {
      display: inline;
      position: absolute;
      left: 75%;
      bottom: -36px;
    }
  `}
`
