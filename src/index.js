import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { debounce } from 'lodash'

import { theme as baseTheme, GlobalStyles } from './styles'

import ThemeToggler from './components/ThemeToggler'
import Discourse from './components/Discourse'

// import BenWeber from './benWeber'

// Scrollbar.init(document.querySelector('#smooth-scrollin'))
process.on('uncaughtException', err => {})
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


  toggleMode = _ => {
    const { theme: { mode } } = this.state
    let newMode = mode === 'dark' ? 'light' : 'dark'
    this.setState({ mode: newMode, theme: baseTheme[newMode] })
  }

  render = _ => {
    const { w, h, theme } = this.state

    return (
      // Ok, so now the theme should be accessible everywhere pretty dang easily
      <MuiThemeProvider theme={theme}> {/* for MUI localStyles */}
        <ThemeProvider theme={theme}> {/* for styled-components */}
          <GlobalStyles /> {/* for all global css styles */}
          {/* <Terminal messages={termMessages} theme={theme} />
          <Nav echo={this.echo} theme={theme} /> */}
          <ThemeToggler
            theme={theme}
            toggleMode={this.toggleMode}
            style={{ transform: 'translate(-50%, 10px)', position: 'fixed', left: '50%', top: 0 }}
          />

          <Discourse {...this.state} />

          {/* <BenWeber theme={theme[mode]} toggleMode={this.toggleMode} w={w} h={h} /> giving theme so it can also be used inline */}
          {/* <h1 style={{ fontSize: 100, color: theme.complement }}>So lets just pretend that we would have a lot of text here</h1>
          <h1 style={{ fontSize: 100, color: theme.complement }}>We're gonna do that so we can see how the headers gonna be lookin</h1>
          <h1 style={{ fontSize: 100, color: theme.complement }}>Will it look well? I have nbo idea bro lets just find ot here in a second</h1> */}
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)