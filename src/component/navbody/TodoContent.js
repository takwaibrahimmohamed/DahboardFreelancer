import React from 'react'
import { Button, Container, Image, Nav } from 'react-bootstrap'
import "./navbody.css"
const TodoContent = () => {
  return (
    <div>
      <Nav className='d-flex justify-content-between todo' style={{paddingTop:"20px"}}>
                <p className='todotext todoListFirst'>To Do List</p>
                <p className='todotext todoListLast'>View all</p>
    </Nav>
      <Nav className='d-flex justify-content-between  todo todoList' style={{paddingTop:"20px"}}>
        <Nav className='todotext d-flex gap-2 align-items-start'>
            <Image src="./images/inactive.png" style={{objectFit:"contain"}}/>
            <p className='createTask'>Create new task</p>
        </Nav>        
     </Nav>
     <div className='d-flex justify-content-between  todo todoList align-items-center'>
        <div className=' d-flex gap-2 align-items-start' style={{paddingLeft:"10px"}}>
            <input type='radio' style={{margin:"20px 0"}}/>
            <p className='mainHead  my-0'>
                Methanex Update Meeting
                <p className='createTask  my-0' >Meeting with client team to update on<br/> progress of application.</p>
            </p>
          
        </div>  
        
        <div className=' d-flex gap-5' style={{paddingRight:"10px"}}>
        <p className='createTask' >2022-06-24</p>
        <Button className='btnTodo' style={{backgroundColor:"#FFB03A"}}>Pending</Button> 
        </div>
             
     </div>
     <div className='d-flex justify-content-between  todo todoList align-items-center'>
        <div className=' d-flex gap-2 align-items-start' style={{paddingLeft:"10px"}}>
            <input type='radio' style={{margin:"20px 0"}}/>
            <p className='mainHead  my-0'>
            Internal CVB Meeting
                <p className='createTask  my-0' >Post meeting with methanex meet with internal CVB <br/>team to discuss feedback.</p>
            </p>
          
        </div>  
        
        <div className=' d-flex gap-5' style={{paddingRight:"10px"}}>
        <p className='createTask my-0' >2022-06-24</p>
        <Button className='btnTodo' style={{backgroundColor:"#FFB03A"}}>Pending</Button> 
        </div>
             
     </div>
     <div className='d-flex justify-content-between  todo todoList align-items-center'>
        <div className=' d-flex gap-2 align-items-start' style={{paddingLeft:"10px"}}>
            <input type='radio' style={{margin:"20px 0"}}/>
            <p className='mainHead  my-0'>
            Lorem Ipsum Meeting
                <p className='createTask  my-0' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </p>
          
        </div>  
        
        <div className=' d-flex gap-5' style={{paddingRight:"10px"}}>
        <p className='createTask' >2022-06-24</p>
        <Button className='btnTodo' style={{backgroundColor:"#29CC97"}}>Done</Button> 
        </div>
             
     </div>
    </div>
  )
}

export default TodoContent
