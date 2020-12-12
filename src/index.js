import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { debounce } from 'lodash'

import { theme as baseTheme, GlobalStyles } from './styles'
import Discourse from './components/Discourse'

class App extends React.Component {
  state = {
    theme: baseTheme.dark,
    w: window.innerWidth,
    h: window.innerHeight,
  }

  componentDidMount = _ => {
    const debouncedResize = debounce(_ => {
      const w = window.innerWidth
      const h = window.innerHeight
      this.setState({ w, h })
    }, 250)
    window.addEventListener('resize', debouncedResize)
  }

  render = _ => {
    const { w, h, theme } = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Discourse {...this.state} />
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)