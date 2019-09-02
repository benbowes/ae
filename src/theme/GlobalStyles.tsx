import { createGlobalStyle } from 'styled-components';
import theme from './';

export default createGlobalStyle`
  body {
    background: ${theme.colour.grey._50};
    font-family: ${theme.font.family.open_sans}, sans-serif;
    font-size: ${theme.font.size.base};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.4;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.font.weight._400};
    font-family: ${theme.font.family.roboto}, sans-serif;
    margin: 0;
  }

  h1 {
    color: ${theme.colour.primary._400};
    font-size: ${theme.font.size._8};
    margin-bottom: ${theme.spacing._28px};
  }
`