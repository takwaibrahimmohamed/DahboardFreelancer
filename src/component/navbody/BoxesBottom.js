import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./navbody.css"
import { Nav } from 'react-bootstrap';
import TodoContent from './TodoContent';
import NoticeBoardContent from './noticeBoardContent';
import Activity from './Activity';
import Calender from './Calender';

const BoxesBottom = () => {
  return (
    <div>
   
      <Row className='my-3 d-flex justify-content-evenly'>
        <Col  md={7} className='todolist mx-1 px-0'>
            <TodoContent/>
            
        </Col>
        <Col md={4} className='noticeBoard px-0'>
            <NoticeBoardContent/>
        </Col>
     
      </Row>
      <Row className='my-3 d-flex justify-content-evenly'>
      <Col md={7} className='calender  mx-1'>
        <Calender/>
      </Col>
        <Col md={4} className='activity px-0' style={{marginTop:"-70px"}}>
            <Activity/>
        </Col>
        
      </Row>
   
    </div>
  )
}

export default BoxesBottom
