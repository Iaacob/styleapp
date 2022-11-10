import React from 'react'
import { GlosarioItem } from './GlosarioItem'
import { Container } from './style'

function Glosario() {
  const categorias = [
    {
      name: "Subcontractors",
      cant: null,
      color: "violet"
    },
    {
      name: "Training",
      cant: 0,
      color: "lightblue"
    },
    {
      name: "Pending status",
      cant: 6,
      color: "red"
    },
    {
      name: "Overassigned",
      cant: null,
      color: "orange"
    },
    {
      name: "Low Allocation",
      cant: null,
      color: "pink"
    },
  ]
  return (
    <Container>
      {categorias.map(({ name, cant, color }) => {
        return <GlosarioItem key={name} name={name} cant={cant} color={color}/>
      })}
    </Container>

    );
}

export default Glosario