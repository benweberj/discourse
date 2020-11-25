import React, { useState, useEffect, useCallback } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { throttle } from 'lodash'
import styled from 'styled-components'

import Text from './components/Text'
import Div from './components/Div'
import Button from './components/Button'

const _button = styled.button`
  transition: all .5s ease;
  outline: none;
  border: 1px solid #fff;
  border-radius: 999px;
  padding: 10px 30px;
  background: none;
  color: #fff;
  &:hover {
    background: #fff;
    color: #000;
  }
`

const localStyles = _ => ({
  cover: {
    opacity: .1,
    width: '50%',
    maxWidth: '50%',
    height: '100%',
    backgroundSize: 'cover',
    filter: 'blur(10px)',
    transition: 'all .3s ease',
    '&:hover': {
      opacity: .3,
      filter: 'none',
    },
    '&:active': {
      transform: 'scale(1.05)',
      // width: '55%',
      // maxWidth: '55%',
    }
  }
})

const mapRange = (from, to, s) => {
  return to[0] + (s - from[0]) * (to[1] - to[0]) / (from[1] - from[0]);
}

const bar = 60

export default withStyles(localStyles)(props => {
  const { classes, w, h } = props
  const [curCover, setCover] = useState(null)
  const [mags, setMags] = useState({ left: 0, right: 0 })


  const barsCB = useCallback(throttle(e => {
    const { pageX } = e
    if (pageX <= w/2) {
      setMags({ left: mapRange([w/2, 0], [0, bar], pageX), right: 0 })
      console.log('left side', mapRange([w/2,0], [0, bar], pageX))
    } else {
      setMags({ right: mapRange([w/2, w], [0, bar], pageX), left: 0 })
      console.log('right side', mapRange([w/2, w], [0, bar], pageX))
    }
  }, 100), []) 

  useEffect(_ => {
    // document.onmousemove = barsCB
  }, [])
  console.log(mags)
  return (
    <>
      <Div w='100%' h='100vh' flex style={{ position: 'abso.lute', top: 0, left: 0, zIndex: 0 }}>
        {/* <Div contain center
          h={bar} w={'100vh'}
          o={1 - mags.left*.018}
          style={{
            pointerEvents: 'none',
            zIndex: 999,
            position: 'absolute',
            left: 0,
            transform: `rotate(90deg) translateY(${curCover !== 'valkyrie' ? 0 : -mags.left - bar/2}px)`,
            transformOrigin: 'top left',
            // backdropFilter: 'blur(5px)',
          }}
        >
          <Text light upper size={80}>Valkyrie</Text>
        </Div>
        <Div contain center
          h={bar} w={'100vh'}
          o={1 - mags.right*.018}
          style={{
            pointerEvents: 'none',
            zIndex: 999,
            position: 'absolute',
            right: 0,
            transform: `rotate(90deg) translateX(100%) translateY(${curCover !== 'imitation' ? -bar : -bar + mags.right + bar/2}px)`,
            transformOrigin: 'top right',
            // backdropFilter: 'blur(5px)',
          }}
        >
          <Text light upper size={70}>The Imitation Game</Text>
        </Div> */}

        <Div onMouseOver={_ => setCover('valkyrie')} onMouseLeave={_ => setCover(null)} center className={classes.cover} style={{ backgroundImage: `url('${require('./img/valkyrie.jpg').default}` }}>
          {/* <Text upper light mt='30vh' type='h1'>Valkyrie</Text> */}
        </Div>
        <Div onMouseOver={_ => setCover('imitation')} onMouseLeave={_ => setCover(null)} center className={classes.cover}  style={{ backgroundImage: `url('${require('./img/imitation.jpg').default}` }}>
          {/* <Text upper light type='h1'>The Imitation Game</Text> */}
        </Div>
        
        <Div col center style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <Text nowrap upper bold size={65}>Discourse Analysis</Text>
          <Text nowrap center light size={25}>Film Representations of German Relations During World War II</Text>
          <Button mt={20} onClick={e => window.scroll({ behavior: 'smooth', top: h })} intent='down'>Let's go</Button>
        </Div>
      </Div>
    </>
  )
})