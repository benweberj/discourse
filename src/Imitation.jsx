import React, { useState, useEffect, useCallback } from 'react'
// import { withStyles } from '@material-ui/core/styles'

import Text from './components/Text'
import Div from './components/Div'
import Button from './components/Button'
import Img from './components/Img'

export default props => {
  const { w, h } = props

  return (
    <Div p={60}>
        <Text type='h1'>The Imitation Game <Text inline light o={.25}>(2014)</Text></Text>
        {/* <Text bold light type='h3' mt={30} mb={10}>Title</Text> */}
        
        {/* <Div w={300} h='100%' style={{ backgroundImage: `url('${require('./img/imitation2.jpg').default}`, backgroundSize: 'cover' }} /> */}
        <Text dull lh={1.5}>
          This is a film depicting a British World War II success story, where uncrackable German codes were cracked by a machine created by British mathematician Alan Turing. The story is primarily told through the perspective of the British government. There are a few German (enemy) characters whose perspectives are represented in small portions, but this is for the most part a story told through the eyes of England about a situation in which they "outsmarted" Germany during World War II.
        </Text>

        <Text dull lh={1.5}>
          In almost every movie based on World War II, Germany is represented as the bad side. And historically, this is pretty hard to refute, given the atrocities carried out by German soldiers by Hitler’s command. But unlike most WWII movies, this one doesn’t show the action playing out between the ground troops during the war and the struggles they went through. There’s no final battle scene where England faces a group of Nazis to try to invoke a feeling of overwhelming patriotism in the audience. Instead, the film focuses on the strategic aspect of the war, showcasing Britain as “more intelligent” than Hitler and his followers.
        </Text>

        <Text dull ln={1.5}>
          I created a word cloud of the most frequently used words in the movie, and from just looking at them, it paints a pretty accurate picture of the movie's tone. The biggest words are ones that aren't associated too strongly with warfare, but more with thinking and the mind. This film is shining light on the intellectual aspect of warfare, portraying the Germans as inferior since they are just focused on exerting tyrannical power, while countries like England are playing it cool and producing technology that can put them several steps ahead of their opponent.
        </Text>

        <Img src={require('./img/wordcloud.png').default} w='50%' block mx='auto' my={50} />

        <Text dull lh={1.5}>
          One of the most significant scenes in this movie happens about ⅔ the way through: Alan and his coworkers are at a bar and end up talking to a woman who looks at coded messages sent by the Germans. She jokingly mentions that she has a crush on her German counterpart (the one writing the messages) since each worker is assigned to a different radio tower and she states that each operator writes a bit differently “so you get to know the rhythm of your counterpart.” Nobody pays too much attention to this, but Alan starts thinking about this heavily then asks her more questions. She says that the German begins each message with the same 5 letters (CILLY) and she assumed this was that soldiers significant other, but Alan and the rest of the crew was under the impression that each message must start with 5 random characters. Alan seems troubled and his coworker says “love will make a man do strange things, I suppose.” Alan responds, “well in this case, love just cost Germany the whole bloody war” and races back to the office to act on this revelation. They realize that they can use previous messages and compare them to words they know will be on some messages, such as “weather” and “Heil Hitler” on the German’s daily 6:00am weather report. They set the settings for Alan’s machine to account for this and are quickly able to decipher a message, allowing them to decipher any future message... [MORE COMING]
        </Text>



          {/* <Text inline bold>Enigma</Text> is the encryptrion technolgy that the Nazis employed heavily throughout World War II in
          order to code their messages. It was seen by cryptographers around the world as unbreakable. <Text inline bold>Alan Turing</Text>,
          a socially awkward mathematician applies for job in English government and claims that its not unbreakable unless he's tried.
        </Text>
        <Text dull lh={1.5}>
          Turing spent all of his time to himself designing up a machine that could crack Enigma. His teammates could occasionally crack
          a code or two, but they weren't making any real progress. They knew that Turing was a genius and could maybe double the amount of codes they cracked,
          but it would still only be a small dent in the total number of messages the Nazis send. Turing was always at odds with his teammates
          because they thought about the present moment, while he thought of a possible point in the near future where they could crack every message,
          at all times, instantly. In the long run, this would obviously save more people, it just requires patience and planning. 
        </Text> */}
    {/* </Div> */}
    </Div>
  )
}