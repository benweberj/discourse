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
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer',
    '&:hover': {
      opacity: .3,
    }
  }
})

const P = props => <Text {...props}>{props.children}</Text>
const H1 = props => <Text {...props} inverse size={80}>{props.children}</Text>
const H2 = props => <Text {...props} inverse size={40} mt={40} mb={10}>{props.children}</Text>
const H3 = props => <Text {...props} inverse size={25}>{props.children}</Text>
const Quote = props => <Text {...props} inverse italic ml={30} size={25} mt={20}>{props.children}</Text>
const Note = props => <Text {...props} size={15} mt={10} inverse italic o={.5}>{props.children}</Text>

const Pi = props => <Text {...props} inverse>{props.children}</Text>
const H1i = props => <Text {...props} size={80}>{props.children}</Text>
const H2i = props => <Text {...props} size={40} mt={40} mb={10}>{props.children}</Text>
const H3i = props => <Text {...props} size={25}>{props.children}</Text>
const Quotei = props => <Text {...props} italic ml={30} size={25} mt={20}>{props.children}</Text>
const Notei = props => <Text {...props} size={15} mt={10} italic o={.5}>{props.children}</Text>

export default withStyles(localStyles)(props => {
  const { classes, w, h } = props
  const [curCover, setCover] = useState(null)
  const [side, setSide] = useState('neutral')
  const [reflection, setReflection] = useState(false)
  const [showingSources, setShowingSources] = useState(false)

  const hiddenStyles = s => {
    return s !== side ? {
      transition: 'all .5s ease, opacity 1s ease',
      maxWidth: 0,
      width: 0,
      padding: 0,
      overflow: 'hidden',
      opacity: 0,
      maxHeight: '100vh',
    } : { width: '100%', transition: 'all .5s ease, opacity 1s ease' }
  }

  const Neutral = (
    <Div style={hiddenStyles('neutral')}>
      <Div col center h={reflection ? 0 : '100vh'} bg='#fff' p={!reflection && 100} contain={reflection}>
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

        <Div center style={{ position: 'absolute', bottom: 100-h, left: '50%', transform: 'translateX(-50%)' }}>
          <Button mr={20} inverse onClick={_ => setReflection(!reflection)} intent='down'>{reflection ? 'Assignment' : 'Reflection'}</Button>
          <Button inverse onClick={_ => setShowingSources(!showingSources)} intent='down'>References</Button>
        </Div>
      </Div>

      <Div h={reflection ? '100vh' : 0} bg='#fff' p={reflection && 100} flex col justify='center' contain={!reflection}>
        <P inverse>
          This is the first time I've ever had any formal exposure to analyzing discourse and geopolitical imagaries. I'll admit,
          it isn't my cup of tea, but overall it was a good experience and it was interesting to take a closer look at what messages
          and ideas are being conveyed through sources that might not be immediately obvious. Since this was my first time undertaking
          a project like this, I had no idea where to start and didn't know the scale of what I'd actually be analyzing. Getting your
          feedback from my proposal was extremely helpful since you recommeded that I focus on a few examples and look at them closely, rather
          than finding every example I could and trying to relate them all together.
        </P>
        <br/>
        <P inverse>
          Writing papers has never been my strong suit
          and I chose to make this project into a website since its something I more comfortable with and I honestly just thought it would
          be less writing. I ended up writing well over the minimum word count for if I had actually done a paper, so I learned that
          most of my distaste of writing paper is probably just from previous bad experiences and not the actual process of writing itself.
        </P>
        <br/>
        <P inverse>
          I put this assigment off for longer than I should have and vastly underestimated how much additional time it would take
          to actually create the website and have it not be an awful viewing experience. I am writing this reflection moments before
          submitting it and I learned more than anything that I need to manage my time better between my school and my job.
        </P>
      </Div>
    </Div>
  )

  const Germany = (
    <Div flex scroll style={hiddenStyles('germany')}>
      <Div full p={100}>
        <Valkyrie />
      </Div>
      {side === 'germany' && (
        <Div center h='100vh' w={60} bg='#0002' onClick={_ => setSide('neutral')} className={classes.toNeutral} style={{ right: 0 }}>
          <Img inverse w={25} src={require('./img/intents/down.png').default} style={{ transform: 'rotate(-90deg)' }} />
        </Div>
      )}
    </Div>
  )

  const UK = (
    <Div flex scroll style={hiddenStyles('uk')}>
      {side === 'uk' && <Div center h='100%' w={60} bg='#0002' onClick={_ => setSide('neutral')} className={classes.toNeutral} style={{ left: 0 }}>
        <Img inverse w={25} src={require('./img/intents/down.png').default} style={{ transform: 'rotate(90deg)' }} />
      </Div>}
      <Div full p={100}>
        <Imitation />
      </Div>
    </Div>
  )

  const hiddenSources = !showingSources ? {
    opacity: 0,
    userSelect: 'none',
    pointerEvents: 'none',
  } : {}

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

      <Div p={50} rad={10} bg='#000a' w='80vw' h='60vh' style={{ position: 'fixed', backdropFilter: 'blur(5px)', top: '20vh', left: '10vw', ...hiddenSources }}>
        <Div onClick={_ => setShowingSources(false)} pointer w={15} h={15} style={{ position: 'absolute', top: 10, right: 10, fontFamily: 'sans-serif', color: '#fff', fontWeight: 'bold', fontSize: 20 }} center>
          X
        </Div>
        <H2i>References</H2i>
        <Quotei>Week 4: Lecture 1 - Getting to know the State</Quotei>
        <Quotei>Week 4: Lecture 2 - The Nation & Nationalism</Quotei>
        <Quotei>Week 9: Lecture 1 - Sexual Citizenship</Quotei>
        <Quotei className={classes.link} onClick={_ => window.open('https://www.stitcher.com/podcast/the-washington-post/moonrise/e/64117847', '_blank')}>Moonrise podcast Episode 8: A New Frontier</Quotei>
        <Quotei className={classes.link} onClick={_ => window.open('https://medium.com/sci-illustrate-stories/joan-clarke-4ab1b5285771', '_blank')}>Joan Clarke</Quotei>
        <Quotei className={classes.link} onClick={_ => window.open('https://www.cambridge.org/core/books/nationalism-and-war/role-of-nationalism-in-the-two-world-wars/05C954AB1231D44B9D7DF998C85C112F', '_blank')}>Nationalism and War</Quotei>
      </Div>
    </>
  )
})