import React from 'react'
import {  Card ,Accordion} from 'react-bootstrap'
import ReactStars from 'react-stars'

const Moviecard = ({movie}) => {
  
  return (
    <div id='mvcard'>  
        <Card style={{ width: '18rem' ,height: '580px', marginTop:'20px'}}>
    <Card.Img variant="top" src={movie.url} style={{height:"380px"}} />
    <Card.Body>
      <Card.Title><h4>{movie.name}</h4></Card.Title>
      <div   style={{marginTop:'20px'}}>
      <ReactStars
  count={5}
  half={false}
  size={24}
  color2={'#ffd700'} 
  value={movie.rating}
  edit={false}

   />  </div>   
    <Accordion defaultActiveKey="1">
      <Accordion.Item style={{alignSelf:'flex-end'}} eventKey="0">

        <Accordion.Header >Description</Accordion.Header>
        <Accordion.Body>
        <p>{movie.discription}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card.Body>
  </Card>

  </div>
  )
}

export default Moviecard