import React, { useState } from 'react'
import Div from './Div'
import Text from './Text'

export default ({ src, text, onClick, cover }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <Div
      pointer
      contain
      bg='#000'
      mr={10}
      rounded
      center
      px={30}
      py={10}
      onClick={onClick}
      style={{ position: 'relative' }}
      onMouseEnter={_ => setHovered(true)}
      onMouseLeave={_ => setHovered(false)}
    >
      <Div full style={{
        position: 'absolute',
        top: hovered ? 0 : '100%',
        left: 0,
        opacity: hovered ? 1 : 0,
        backgroundSize: cover ? 'cover' : 'contain',
        backgroundPosition: 'center',
        backgroundImage: `url(${src})`,
        pointerEvents: 'none'
      }}/>
      <Text bold>{text}</Text>
    </Div>
  )
}