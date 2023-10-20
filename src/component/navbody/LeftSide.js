import React from 'react'
import { Container, Image, Nav } from 'react-bootstrap'
import "./navbody.css"
const LeftSide = () => {
  return (
    <Nav className='leftSide'>
    <Container>
        <Nav className='my-3 d-flex justify-content-between'>
            <Nav className='left d-flex align-items-center gap-2'>
                <Image src="./images/manage_accounts.png"/>
                <p className='textLeftside'>User Management</p>
            </Nav>
            <Image src="./images/leftArrow.png"/>
        </Nav>
        <Nav className='my-3 d-flex justify-content-between'>
            <Nav className='left d-flex align-items-center gap-2'>
                <Image src="./images/icon-park-outline_communication.png"/>
                <p className='textLeftside'>Manage Communications</p>
            </Nav>
            <Image src="./images/leftArrow.png"/>
        </Nav>
        <Nav className='my-3 d-flex justify-content-between'>
            <Nav className='left d-flex align-items-center gap-2'>
                <Image src="./images/home_repair_service.png"/>
                <p className='textLeftside'>Productivity Tools</p>
            </Nav>
            <Image src="./images/leftArrow.png"/>
        </Nav>
        <Nav className='my-3 d-flex justify-content-between'>
            <Nav className='left d-flex align-items-center gap-2'>
                <Image src="./images/la_user-lock.png"/>
                <p className='textLeftside'>Manage Contracts</p>
            </Nav>
            <Image src="./images/leftArrow.png"/>
        </Nav>
        <Nav className='my-3 d-flex justify-content-between'>
            <Nav className='left d-flex align-items-center gap-2'>
                <Image src="./images/description.png"/>
                <p className='textLeftside'>Reports</p>
            </Nav>
            <Image src="./images/leftArrow.png"/>
        </Nav>
        <Nav className='my-3 d-flex justify-content-between'>
            <Nav className='left d-flex align-items-center gap-2'>
                <Image src="./images/iconoir_bookmark-book.png"/>
                <p className='textLeftside'>Library</p>
            </Nav>
            <Image src="./images/leftArrow.png"/>
        </Nav>
    </Container>
    </Nav>
  )
}

export default LeftSide
