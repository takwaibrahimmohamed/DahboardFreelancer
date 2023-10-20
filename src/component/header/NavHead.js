import React from 'react'
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
const NavHead = () => {
  return (
    <Navbar className="py-0" style={{background: "#207EA9",height:"50px"}}>
    <Container fluid>
 
      <Navbar.Collapse className="justify-content-center" >
      <Nav variant="tabs" defaultActiveKey="/home" style={{borderBottom:"none",height:"22px"}}>
      <Nav.Item>
        <Nav.Link href="/home" className='text textDash' style={{color:"#207EA9 !important",fontWeight:"500"}}>Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" disabled className='text' style={{color:"#fff"}}>Browse</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled className='text' style={{color:"#fff"}}>
        Employee Alerts
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled className='text' style={{color:"#fff"}}>
        Online Users
        </Nav.Link>
      </Nav.Item>
    </Nav>
    
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end gap-3">
      <Button  className='text_btn' style={{background:"#fff",color:"#0C0C0C"}}>Connect</Button>{' '}
      <Button  className='text_btn' style={{background:"#0C0C0C",color:"#fff !important"}}>Reference Check</Button>{' '}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavHead
