import React, { useState, useEffect, useCallback } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

import Text from './components/Text'
import Div from './components/Div'
import Button from './components/Button'
import Img from './components/Img'
import CountryButton from './components/CountryButton'

import Valkyrie from './Valkyrie'
import Imitation from './Imitation'

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
  },
  toNeutral: {
    '&:hover': {
      background: '#0004'
    },
    position: 'fixed',
    top: 0,
  }
})

const P = props => <Text {...props}>{props.children}</Text>
const H1 = props => <Text {...props} inverse size={80}>{props.children}</Text>
const H2 = props => <Text {...props} inverse size={40} mt={40} mb={10}>{props.children}</Text>
const H3 = props => <Text {...props} inverse size={25}>{props.children}</Text>
const Quote = props => <Text {...props} inverse italic ml={30} size={25}>{props.children}</Text>
const Note = props => <Text {...props} size={15} mt={10} inverse italic o={.5}>{props.children}</Text>

export default withStyles(localStyles)(props => {
  const { classes, w, h } = props
  const [curCover, setCover] = useState(null)
  const [side, setSide] = useState('uk')

  const hiddenStyles = s => {
    return s !== side ? {
      transition: 'all .5s ease, opacity 2s ease',
      maxWidth: 0,
      width: 0,
      padding: 0,
      overflow: 'hidden',
      opacity: 0,
      maxHeight: '100vh',
    } : { width: '100%', transition: 'all .5s ease, opacity 2s ease' }
  }

  const Neutral = (
    <Div col center h={'100vh'} bg='#fff' p={100} style={hiddenStyles('neutral')}>
      <H3>Both of these films take place near the end of World War II. One is told through the perspective of the United Kingdom, and the other through their opponent's, Germany. Despite being on opposing sides, the enemy of both of these narratives is constant: Hitler and his followers. These stories are based on true events and the perspectives of both the UK and Germany are represented.</H3>
      <Div flex w='100%' mt={20}>
        <CountryButton
          src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
          text={'See Germany\'s side'}
          onClick={_ => setSide('germany')}
          cover={false}
        />
        <CountryButton
          src='https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png'
          text={'See the UK\'s side'}
          onClick={_ => setSide('uk')}
          cover={true}
        />
      </Div>
    </Div>
  )

  const Germany = (
    <Div flex scroll style={hiddenStyles('germany')}>
      <Div full p={100}>
        <Valkyrie />
      </Div>
      {side === 'germany' && (
        <Div center h='100vh' w={30} bg='#0002' onClick={_ => setSide('neutral')} className={classes.toNeutral} style={{ right: 0 }}>
          <Img w={18} src={require('./img/intents/down.png').default} style={{ transform: 'rotate(-90deg)' }} />
        </Div>
      )}
    </Div>
  )

  const UK = (
    <Div flex scroll style={hiddenStyles('uk')}>
      {side === 'uk' && <Div center h='100%' w={30} bg='#0002' onClick={_ => setSide('neutral')} className={classes.toNeutral} style={{ left: 0 }}>
        <Img w={18} src={require('./img/intents/down.png').default} style={{ transform: 'rotate(90deg)' }} />
      </Div>}
      <Div full p={100}>
        <Imitation />
      </Div>
    </Div>
  )

  return (
    <>
      <Div w='100%' h='100vh' flex>
        <Div
          onMouseOver={_ => setCover('valkyrie')}
          onMouseLeave={_ => setCover(null)}
          className={classes.cover}
          style={{ backgroundImage: `url('${require('./img/valkyrie.jpg').default}` }}
        />
        <Div
          onMouseOver={_ => setCover('imitation')}
          onMouseLeave={_ => setCover(null)}
          className={classes.cover} 
          style={{ backgroundImage: `url('${require('./img/imitation.jpg').default}` }}
        />
        <Div col center style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <Text nowrap upper bold size={65}>Discourse Analysis</Text>
          <Text nowrap center light size={25}>Film Representations of German Relations During World War II</Text>
          <Button mt={20} onClick={e => window.scroll({ behavior: 'smooth', top: h })} intent='down'>Let's go</Button>
        </Div>
      </Div>

      <Div flex bg='#fff'>
        {Germany}
        {Neutral}
        {UK}
      </Div>
    </>
  )
})