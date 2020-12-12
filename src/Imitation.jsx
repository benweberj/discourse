import React from 'react'
import Text from './components/Text'
import Img from './components/Img'

const P = props => <Text {...props} inverse>{props.children}</Text>
const H1 = props => <Text {...props} inverse size={80}>{props.children}</Text>
const H2 = props => <Text {...props} inverse size={40} mt={40} mb={10}>{props.children}</Text>
const H3 = props => <Text {...props} inverse size={25}>{props.children}</Text>
const Quote = props => <Text {...props} inverse italic ml={30} size={25} mt={20}>{props.children}</Text>
const Note = props => <Text {...props} size={15} mt={10} inverse italic o={.5}>{props.children}</Text>

export default _ => (
  <>
    <H1>The Imitation Game <Text inline inverse o={.5}>(2014)</Text></H1>
    <H2>Overview</H2>
    <P>
      This is a film depicting a World War II success story, where “uncrackable” codes produced by the German's Enigma machine 
      were being studied relentlessly by the UK government, particularly MI6. The main character is Alan Turing, a British 
      mathematician who approaches MI6 and confidently says that the Nazi codes they have been looking at aren’t uncrackable 
      until he has given it a shot. Turing quickly demonstrates his intellectual capability and his team is well aware of the
      impact he could have on this war. Another prominent character is Joan Clarke, a woman who joined the team after outperforming
      all other applicants on a test, which she was almost excluded from upon entry since people didn't believe she had actually solved
      the first test that was put in the local paper to recruit members.
      <br/><br/>
      Turing’s thought is that it would be <b>good</b> to crack some messages, some of the time, 
      but it would be <b>great</b> if they could every code, every time. This prompted him to devote all of his efforts 
      towards creating a machine that would be able to do just that. Turing needs time to be able to calibrate his machine, and
      his team feels that his time would be better spent helping them crack the occasional code, but Turing sees the bigger picture.
      Eventually, Turing has an epiphany and realizes that he could program his 
      machine to remember words that they knew would be in some messages; he quickly recalibrates his machine and they were
      able to quickly crack an incoming code. All that was left to do was alert MI6 and urge the UK governemnt to act on this information 
      intelligently so that the Germans wouldn’t become suspicious if every plan happened to be predicted perfectly.
    </P>

    <H2>Geopolitical Imaginaries</H2>
    <P>
      The first imaginary that is created through the film is that although the Germans had a powerful army and a militarily strategic Fuhrer,
      that is not enough to win a war when you are outsmarted off the battlefield. 

      There is no final battle scene where you get an overwhelming sence of dramatic patriotism, instead the entiretly of the film focuses on 
      the superior strategies that the United Kingdom was implmenting to win the war without Hitler and the rest of Germany having any clue.
    </P>

    <P>
      Another imaginary that this film creates is one that emphasizes that women, (more so in the film's time period), althought presumed to be
      less intelligent and kept out of fields such as military cryptography, have the capability of outperorming their male colleagues. This was
      shown with Joan Clarke, who the team was initially skeptical of since she was the only woman who completed Turing's test in the paper and 
      showed up looking like a fairly normal, attractive woman who on first glance doesn't look like a "nerd" who could provide any help. This was
      far from the truth and Clarke was a valuable member of the team and, from the film's representation, contributed the most to the codebreaking
      efforts, second to Turing. 
    </P>

    <H2>Most Representative Language</H2>
    <P>
      The wordcloud that I created with the script of this movie does a great job of showing its overall tone. This is a film about the climax of the
      second world war, but there are hardly any indications of standard warfare from the most common words. What you end up seeing most are words like
      "puzzle", "work", "think", and "secret."; words that are strongly associated with the mind, and thinking critically through problems. The film is 
      shining light on the intellectial aspect of warfare, portraying the Germans as inferior since they are only focused on exerting tyrannical power,
      while countries like England are playing it cool and producing technology that can put them several steps ahead of their opponent.
    </P>
    <br/><br/>
    <P>
      The climax of the film is when Alan has his epiphany about the structure of the German messgaes. A woman who works in another department jokingly 
      mentions that she has a crush on the German code-sender that she was assigned to intercept messages from, but that it wouldn't work out becauase
      the German always started each message with "CILLY", which she assumed was his significant other's name (a bit of an odd conclusion to come to,
      but hey, its a movie). This meant that there were words that they knew would come up in some messages, and they could work from that.
      The girl thinks nothing of it, but Turing is very interrogative and wants to know why there are constant words when the assumption was that the Germans
      were instructed to never do this. Another character says <i>"Love will make a man do strange things, I guess,"</i> to which Turing replies:
    </P>
    <Quote>
      "Well in this case, love just lost Germany the whole bloody war."
    </Quote>
    <br/><br/>
    <P>
      Turing races back to the lab and calibrate the machine with this new information, knowing that every 7:00am weather report ends with "Heil Hitler." Moments
      later, the machine spits out the original message. This part about using the expect "Heil Hitler" ending was true, and its very fitting that the German soliders'
      chant of unconditional servitude is what lead to their loss.
    </P>
    <br/><br/>
    
    <P>
      In reference to the geopolitical imaginary about women in academic fields, a good scene that displays this well is when Clarke first meets Turing after
      winning that contest. She got there a little late and when the guard at the door saw her, he initially refused to let her in and said:
    </P>
    <Quote>"The secretaries are to head upstairs. This room is for the candidates."</Quote>
    <br/><br/>
    <P>
      After Turing tells them to let her in, she sits down to solve a test devised by Turing, completing it faster than any of them, including Turing himself.
    </P>

    <P mt={50} mb={10}>
      Here is a wordcloud generated from the movie's script, with the more common words such as "the" and "to" filtered out.
    </P>
    <Img rad={10} w={'70vw'} src={require('./img/wordcloud-imitation.png')} />
  </>
)