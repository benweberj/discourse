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
    <H1>Valkyrie <Text inline inverse o={.5}>(2008)</Text></H1>
    <H2>Overview</H2>
    <P>
      This film follows high-ranking German officer, <b>Claus von Stauffenberg</b>,  who began to see the inhumanity of the actions carried out by Nazi soliders under
      Hitler's orders. After several failed assassination attempts (only one of them being shown in the film), Stauffenberg comes into contact with other German
      officers who share his disgust of the direction of the country. The plan that they developed involved taking advantage of Hitler's contingency plan, Operation Walküre (Valkyrie).
      This order would be enacted in the event that Hitler is killed or cut out of power, deploying thousands of reserve army soldiers stationed around the country.
      Stauffenberg's objective was to gain Hitler's trust so he could make changes to the Valkyrie document that would allow him and his team to convince Germany that
      there was a coup taking shape and that the SS was behind it. Meanwhile, Stauffenberg's team would use the distraction to quietly put a new government in place.
    </P>
    <Note>NOTE: Although this was an American-made film, it is essentially a remake of the 2004 German film <b>Stauffenberg</b>, which tells the same story.</Note>

    <H2>Geopolitical Imaginaries</H2>
    <P>
      I think this film did a great job of bringing light to the fact that the main enemy of the world at that time was not the Germans, but Hitler and his Nazi followers.
      Many people around the world have a bias towards Germany because they associate the whole country with Germany, similar to how people are inclined to view
      the United States poorly because of our use of slavery in the past. This is one of the only movies that I have seen about World War II where the main characters are German
      and are seen as the good guys. This film constructs a geopolitical imaginary about Germany that attempts to <b>reverse these common misconceptions about Germans</b> and show
      that an internal battle against Hitler existed, and required the work of brave German men to see it through.
      <br/><br/>
      While creating a geopolitical imaginary that contrasts what the general public's initial perceptions were, it also reinforces one that I would say an overwhelming
      majority of the world holds: <b>Hitler is bad</b>. There hasn't been a single popular film involving Hitler that has opposed this imaginary, and this one is no exception.
      There was no point in the film where the Hitler's atrocities were actually shown, but they are mentioned, and the opening scene lays out that there is a widespread
      disgust among German officers towards Hitler for this reason.
    </P>

    <H2>Most Representative Language</H2>
    <P>
      There are several instances where the language used by the characters paints a detailed picture of the general sentiment that many Germans supported.
      The film begins with audio of a Nazi crowd shouting an oath in German, rendering unconditional obedience to the Fuhrer and pledging that they will be
      ready at all times to give their lives for this oath. As this audio is playing, it transitions to Stauffenberg writing (either a letter or personal note),
      where he voices his displeasure with Hitler and his crimes of mass execution of Jews, murder of civillians, and torture and starvation of prisoners.
      He ends this opening monologue with this:
    </P>
    <Quote>
      "My duty as an officer is no longer to save my country, but to save human lives. Hitler is not only the archenemy
      of the world, but the archenemy of Germany."
    </Quote>
    <br/><br/>
    
    <P>
      Shortly after this, Stauffenbergs comes into contact with German officers who share his hatred of Hitler. He is invited to a meeting where they are
      discussing what they want to be done, and they decide that they are going to assassinate Hitler. Shortly after, Stauffenberg angrily walks out after
      doubting the motivations of the others, since its poor execution would lead to his death as well as his family's. Another officer comes out to convince him
      to try, and when mentioning the low chance of success, the other officer shouts in passion:
    </P>
    <Quote>"It doesn't matter! We have to show the world that not all of us are like him!"</Quote>

    <P mt={50} mb={10}>
      I thought it would be interesting to see the frequency in which certain words appear in the film, so here is a wordcloud generated from the movie's
      script, with the more common words such as "the" and "to" filtered out.
    </P>
    <Img rad={10} w={'70vw'} src={require('./img/wordcloud-valkyrie.png').default} />
  </>
)