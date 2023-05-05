import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.p};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
  }
`;

export default GlobalStyle;
