import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { Container } from 'react-bootstrap'

const NavBody = () => {
  return (
    <Container fluid style={{display:"flex",gap:"30px",marginTop:"15px"}}>
      <LeftSide/>
      <RightSide/>
    </Container>
  )
}

export default NavBody
