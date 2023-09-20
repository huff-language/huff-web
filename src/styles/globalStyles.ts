import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html, #__next {
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    background-color: ${props => props.theme.colors.bgShade0};
    color: ${props => props.theme.colors.text};
    margin: 0;
    padding: 0;
  }

  a {
    color: ${props => props.theme.colors.accent0} !important;

    &:hover, &:focus, &:active {
      color: ${props => props.theme.colors.accent1} !important;
    }
  }

  .mono-font {
    font-family: "Roboto Mono", sans-serif;
  }

  ::selection {
    color: #000;
    background: ${props => props.theme.colors.text};
  }

  // TOOLTIPS
  .tooltip {
    border: none;
  }

  .tooltip > .tooltip-inner {
    background-color: ${props => props.theme.colors.bgShade1};
    color: ${props => props.theme.colors.text};
  }

  .tooltip.bs-tooltip-left > .tooltip-arrow::before {
    border-left-color: ${props => props.theme.colors.bgShade1};
  }

  .tooltip.bs-tooltip-right > .tooltip-arrow::before {
    border-right-color: ${props => props.theme.colors.bgShade1};
  }

  .tooltip.bs-tooltip-top > .tooltip-arrow::before {
    border-top-color: ${props => props.theme.colors.bgShade1};
  }

  .tooltip.bs-tooltip-bottom > .tooltip-arrow::before {
    border-bottom-color: ${props => props.theme.colors.bgShade1};
  }
`

export default GlobalStyle
