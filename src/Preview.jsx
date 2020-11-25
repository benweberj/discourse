import React, { useState, useEffect } from 'react'
import AnimateHeight from 'react-animate-height'

import Div from './components/Div'
import OmicPreview from './components/OmicPreview'

const sections = {
  omic: {
    name: 'Omic',
    comp: <Omic />
  },
  p5: {

  },
  other: {

  }
}

const Preview = props => {
  // const {  } = props
  const [showing, setShowing] = useState(false)

  return (
    <Div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', border: '1px solid red' }}>
      <AnimateHeight height={showing ? 'auto' : 0}>
        {/* <Div p={20} bg='#5b9' full /> */}
        {/* Make preview components for all categories.  */}
        {/* Current idea: when they hover over the logo, show infr about it. The OmicPreview should have 3 screenshots, os, c19, and site. Not sure about third section */}
      </AnimateHeight>
      <Div center>
        <Div onMouseOver={_ => setShowing(sections.omic) circle bg='white' p={30} m={20} />
        <Div onMouseOver={_ => setShowing(sections.p5)} circle bg='palevioletred' p={30} m={20} />
        <Div onMouseOver={_ => setShowing(sections.other)} circle bg='papayawhip' p={30} m={20} />
      </Div>
    </Div>
  )
}

export default Preview