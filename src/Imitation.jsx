import React from 'react'
import Text from './components/Text'
import Img from './components/Img'

const P = props => <Text {...props} inverse>{props.children}</Text>
const H1 = props => <Text {...props} inverse size={80}>{props.children}</Text>
const H2 = props => <Text {...props} inverse size={40} mt={40} mb={10}>{props.children}</Text>
const H3 = props => <Text {...props} inverse size={25}>{props.children}</Text>
const Quote = props => <Text {...props} inverse italic ml={30} size={25}>{props.children}</Text>
const Note = props => <Text {...props} size={15} mt={10} inverse italic o={.5}>{props.children}</Text>

export default _ => (
  <>
    <H1>The Imitation Game <Text inline inverse o={.5}>(2014)</Text></H1>
    <H2>Overview</H2>
    <P>
      This is a film depicting a World War II success story, where “uncrackable” German codes produced by their Enigma machine 
      were being studied relentlessly by the UK government, particularly MI6. The main character is Alan Turing, a British 
      mathematician who approaches MI6 and confidently says that the Nazi codes they have been looking at aren’t uncrackable 
      until he has given it a shot. Turing quickly demonstrates his intellectual capability and his team is well aware of the
      impact he could have on this war. Turing’s thought is that it would be good to crack some messages, some of the time, 
      but it would be great if they could crack them all, at any time. This prompted Turing to devote all of his efforts 
      towards creating a machine that would be able to do just that. He is met with constant obstacles, the first being the 
      lack of funding and the more challenging one being his team’s doubt that this machine is worth the effort since its 
      production has taken a long time. His team feels that his time would be better spent helping them crack the occasional
      code, but Turing sees the bigger picture. Eventually, Turing has an epiphany and realizes that he could program his 
      machine to remember words that they knew would be in some messages; he quickly recalibrates his machine and they were
      able to quickly crack an incoming code. All that was left to do was alert MI6 and urge them to act on this information 
      intelligently so that the Germans wouldn’t become suspicious.
    </P>

    <H2>Geopolitical Imaginaries</H2>
    <P>
      The United Kingdom is smarter than Germany
    </P>

    <P>
      Woman are smart.
    </P>

    <H2>Most Representative Language</H2>
    <P>
      
    </P>
    <Quote>
      "Lorem Ipsum."
    </Quote>
    <br/><br/>
    
    <P>
      
    </P>
    <Quote>"Lorem ipsum"</Quote>

    <P mt={50} mb={10}>
      Here is a wordcloud generated from the movie's script, with the more common words such as "the" and "to" filtered out.
    </P>
    <Img rad={10} w={'70vw'} src={require('./img/wordcloud-imitation.png').default} />
  </>
)