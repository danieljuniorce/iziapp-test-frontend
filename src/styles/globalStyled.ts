import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }



  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) =>
      theme.colors.backgroundPrimary} !important;
    color: ${({ theme }) => theme.colors.textColorPrimary} !important;
    font-weight: 400;
  }

  body::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.red};
      border-radius: 8px;    /* color of the scroll thumb */
           /* roundness of the scroll thumb */
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColorPrimary} !important;
  }

  textarea, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`

export default GlobalStyle
