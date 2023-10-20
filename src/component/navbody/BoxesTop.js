import React from 'react'
import { Nav } from 'react-bootstrap'
import "./navbody.css"
const BoxesTop = () => {
  return (
    <Nav className='d-flex gap-3'>
        <Nav className='box' style={{borderBottom:"4px solid #207EA9"}}>
            <h5 className='numBox'>0</h5>
            <p className='textBox'>Open Tickets</p>
        </Nav>
        <Nav className='box' style={{borderBottom:"4px solid #FFB03A"}}>
            <h5 className='numBox'>0</h5>
            <p className='textBox'>User Access Requests</p>
        </Nav>
        <Nav className='box' style={{borderBottom:"4px solid #DA4747"}}>
            <h5 className='numBox'>29</h5>
            <p className='textBox'>Supplier Access Requests</p>
        </Nav>
        <Nav className='box' style={{borderBottom:"4px solid #03A100"}}>
            <h5 className='numBox'>0</h5>
            <p className='textBox'>Closed Tickets</p>
        </Nav>
       
    </Nav>
  )
}

export default BoxesTop
