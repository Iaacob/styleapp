import React from 'react'
import {Container, Circle, Texto} from './style'

export const GlosarioItem = ({ name, cant, color }) => {
  return (
    <Container>

        <Circle color={color}/>
        {name}
        
        <Texto> { cant }</Texto>
        
    </Container>
  )
}
