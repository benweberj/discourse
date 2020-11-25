import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background: linear-gradient(45deg, #0c0d13, #343b42);
    transition: background .5s ease;
    /* padding-bottom: 5vw; */
    height: 100%;
    background-size: cover;
    background-attachment: fixed;
    font-size: 15px;

  }

  p { 
    font-size: 19px;
    -webkit-font-smoothing: antialiased;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Prata', sans-serif;
    box-sizing: border-box;
  }

  .w5 { height: max(5vw, 5vh) }
  .w10 { height: max(10vw, 10vh) }

  @keyframes pulsedark {
    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, .15) }
    100% { box-shadow: 0 0 0 60px rgba(255, 255, 255, 0) }
  }

  @keyframes pulselight {
    0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, .05) }
    100% { box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) }
  }
`

const baseStyles = {
  primary: '#6ca6e2',
  accent: '#6ca6e2',

  darkColor: '#191f33',
  lightColor: '#ffffff',

  light: 100,
  regular: 400,
  bold: 900,
  corners: 5,
  cornersSm: 3,
}

export const theme = {
  dark: {
    mode: 'dark',
    base: baseStyles.darkColor,
    complement: baseStyles.lightColor,
    ...baseStyles
  },

  light: {
    mode: 'light',
    base: baseStyles.lightColor,
    complement: baseStyles.darkColor,
    ...baseStyles
  }
}