import React from 'react'
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
const Header = () => {
  return (
    <Navbar className="bg-body-light py-0">
    <Container fluid>
    
      <Navbar.Brand href="#home">
      <Image src="/images/image 3.png"/>
      </Navbar.Brand>
      <Navbar.Toggle />   
     
      <Navbar.Collapse className="justify-content-center">
     
      <Nav fill  variant="tabs" defaultActiveKey="/home" style={{borderBottom:"none"}}>

      <Nav.Item className='text-center' >
      <Nav.Link eventKey="link-1" disabled>
        <Image src='/images/ant-design_home-outlined.png'/>
        <p className='text' style={{marginTop:"10px"}}>Home</p>
        </Nav.Link>
      </Nav.Item>
    
     
      <Nav.Item className='text-center'>
        <Nav.Link href="/home" style={{background:" #207EA9",borderRadius:"0"}} >
       
          <Image src='/images/ant-design_home-outlined (1).png'/>
          <p className='text' style={{marginTop:"10px",color:"white"}}>Site Assured</p>
        
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='text-center'>
        <Nav.Link eventKey="link-1" disabled>
        
          <Image src='/images/ant-design_home-outlined.png'/>
          <p className='text' style={{marginTop:"10px"}}>Competency Manager</p>
       
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='text-center'>
        <Nav.Link eventKey="disabled" disabled>
       
          <Image src='/images/ant-design_home-outlined.png'/>
          <p className='text' style={{marginTop:"10px"}}>VEM Inspection</p>
        
        </Nav.Link>
      
      </Nav.Item>
      <Nav.Item className='text-center'>
      <Nav.Link eventKey="disabled" disabled>
        
        <Image src='/images/ant-design_home-outlined.png'/>
        <p className='text' style={{marginTop:"10px"}}>Supplier Assessment Manager</p>
      
      </Nav.Link>
      
      </Nav.Item>
        </Nav>
       
    
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
       <Nav className='d-flex justify-content-between gap-4'>
            <Nav.Item>
                <Image  src='/images/iconoir_message-text.png' />
            </Nav.Item>
            <Nav.Item className='d-flex align-items-start gap-2'>
            <Image  src='/images/Rectangle 9.png' className='object-fit-contain'/>
                <Nav.Item className='d-flex align-items-center gap-2'>
                <p className='text text-start' >
                Nigel Taylor
                <br/>
                <span className='text-span'> Admin</span>
                </p>
           <Image  src='/images/priority-low 1.png' className='object-fit-contain'/>
                </Nav.Item>
            </Nav.Item>
       </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header
