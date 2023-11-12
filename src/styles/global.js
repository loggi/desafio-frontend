import { Global as GlobalStyles, css } from '@emotion/react'

export default function Global() {
  return (
    <GlobalStyles
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
  )
}
