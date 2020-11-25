import React, { useState, useEffect, useCallback } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { throttle } from 'lodash'

import Text from './components/Text'
import Div from './components/Div'

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
    document.onmousemove = barsCB
  }, [])
  console.log(mags)
  return (
    <>
      <Div w='100%' h='100vh' flex style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <Div contain center
          h={bar} w={'100vh'}
          o={Math.abs(40 - mags.left)}
          // bg={curCover === 'valkyrie' && '#0006'}
          // maxH={curCover !== 'valkyrie' ? '0' : bar}
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
          // bg={curCover === 'imitation' && '#0006'}
          // maxH={curCover !== 'imitation' ? '0' : mags.right}
          style={{
            pointerEvents: 'none',
            zIndex: 999,
            position: 'absolute',
            right: 0,
            transform: `rotate(90deg) translateX(100%) translateY(${curCover !== 'imitation' ? -bar : -bar + mags.right + bar/2}px)`,
            // transform: `rotate(90deg) translateY(${curCover !== 'imitation' ? '0' : '0'}px)`,
            transformOrigin: 'top right',
            // backdropFilter: 'blur(5px)',
          }}
        >
          <Text light upper size={70}>The Imitation Game</Text>
        </Div>

        <Div onMouseOver={_ => setCover('valkyrie')} onMouseLeave={_ => setCover(null)} center className={classes.cover} style={{ backgroundImage: `url('${require('./img/valkyrie.jpg').default}` }}>
          {/* <Text upper light mt='30vh' type='h1'>Valkyrie</Text> */}
        </Div>
        <Div onMouseOver={_ => setCover('imitation')} onMouseLeave={_ => setCover(null)} center className={classes.cover}  style={{ backgroundImage: `url('${require('./img/imitation.jpg').default}` }}>
          {/* <Text upper light type='h1'>The Imitation Game</Text> */}
        </Div>
        
        <Div full col center style={{ position: 'absolute', pointerEvents: 'none' }}>
          <Text upper bold size={65}>Discourse Analysis</Text>
          <Text center style={{ width: '60%' }} light size={25}>Film Representations of U.S / Germany Relations</Text>
        </Div>
      </Div>
    </>
  )
})