import React from 'react'
import {String} from 'prop-types'
import {Container, Name, Description, Image} from './style'

function Producto(props) {
  return (
    <Container>
        <Name/>
        <Description/>
        <Image />
    </Container>
  )
}

Producto.propTypes = {
    nombre: String.isrequired,
}

export default Producto