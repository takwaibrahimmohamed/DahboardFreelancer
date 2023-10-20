import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Calender.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Calender = () => {
  return (
    <div>
     <Row style={{marginTop:"20px"}}>
        <Col>
        <p className='month'>
        <FontAwesomeIcon icon={faArrowLeft} style={{margin:"0 15px"}}/>
       
            August 2022  <FontAwesomeIcon icon={faArrowRight} style={{margin:"0 15px"}}/></p>
        </Col>
      </Row>
     <Row style={{backgroundColor:"#F9FAFD",textAlign:"center",padding:"10px"}}>
     <Col className='days'>Mon</Col>
        <Col className='days'>Tue</Col>
        <Col className='days'>Wed</Col>
        <Col className='days'>Thu</Col>
        <Col className='days'>Fri</Col>
        <Col className='days'>Sat</Col>
        <Col className='days'>Sun</Col>
       
      </Row>
     <Row>
     <Col className='dayNum'>1</Col>
        <Col className='dayNum'>2</Col>
        <Col className='dayNum'>3</Col>
        <Col className='dayNum'>4</Col>
        <Col className='dayNum'>5</Col>
        <Col className='dayNum'>5</Col>
        <Col className='dayNum'>6</Col>
      </Row>
     <Row>
        <Col className='dayNum'>7</Col>
        <Col className='dayNum'>8</Col>
        <Col className='dayNum'>9</Col>
        <Col className='dayNum'>10</Col>
        <Col className='dayNum'>11</Col>
        <Col className='dayNum'>12</Col>
        <Col className='dayNum'>13</Col>
      </Row>
     <Row>
     <Col className='dayNum'>14</Col>
        <Col className='dayNum'>15</Col>
        <Col className='dayNum'>16</Col>
        <Col className='dayNum'>17</Col>
        <Col className='dayNum'>18</Col>
        <Col className='dayNum'>19</Col>
        <Col className='dayNum'>20</Col>
      </Row>
     <Row>
     <Col className='dayNum'>21</Col>
        <Col className='dayNum'>22</Col>
        <Col className='dayNum'>23</Col>
        <Col className='dayNum'>24</Col>
        <Col className='dayNum'>25</Col>
        <Col className='dayNum'>26</Col>
        <Col className='dayNum'>27</Col>
      </Row>
     <Row>
     <Col className='dayNum'>28</Col>
        <Col className='dayNum'>29</Col>
        <Col className='dayNum'>30</Col>
        <Col className='dayNum'>
            <p className='activeDay'>31</p>
           </Col>
        <Col className='dayNum disable'>1</Col>
        <Col className='dayNum disable'>2</Col>
        <Col className='dayNum disable'>3</Col>
      </Row>
    </div>
  )
}

export default Calender
