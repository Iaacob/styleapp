import React from 'react'
import {string} from 'prop-types'
import {Container, Name, Category, Image, Description} from './style'

function Producto(nombre, categoria, descripcion) {
  return (
    <Container>
      <Image src="https://i.discogs.com/jtlykYk336toKQUjrLIQNtGJaF0vVRn8ORrWRvDIUW0/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwMTA4/MjMtMTMzNTcyODAx/Ni5wbmc.jpeg"/>
        <Name>{nombre}</Name>
        <Category>{categoria}</Category>
        <Description>{descripcion}</Description>
    </Container>
  )
}

Producto.propTypes = {
  nombre:string.isRequired,
  categoria:string.isRequired,
  descripcion:string.isRequired
}

export default Producto