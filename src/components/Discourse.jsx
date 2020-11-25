import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Div from './Div'
import Text from './Text'
import Img from './Img'
import Home from '../Home'

const localStyles = _ => ({
  
})

const Discourse = props => {
  const { theme: { mode }, classes } = props

  return (<>
    {/* <Text center mt={50} type='h1' bold>Discourse Analysis <Text inline light>| Ben Weber</Text></Text> */}
    <Home {...props} />

    {/* <Div justify='evenly' mt={50}>
      <Div col center w='48%'>
        <Text bold italic size={30}>The Imitation Game <Text inline light o={.5}>(2014)</Text></Text>
        <Img rad={10} src={require(`../img/wordcloud.png`).default} w='100%' block mx='auto' style={{ mixBlendMode: mode === 'light' && 'exclusion'  }} />
      </Div>
      <Div col center w='48%'>
        <Text bold italic size={30}>Other <Text inline light o={.5}>(YEAR)</Text></Text>
        <Img rad={10} src={require(`../img/wordcloud.png`).default} w='100%' block mx='auto' style={{ mixBlendMode: mode === 'light' && 'exclusion'  }} />
      </Div>
    </Div> */}
    {/* <Button intent='right'>asdklflkasd</Button> */}
  </>)
}

export default withStyles(localStyles)(Discourse)