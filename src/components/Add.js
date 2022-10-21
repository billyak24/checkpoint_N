import {Form, Modal ,Button} from 'react-bootstrap';
import React, { useState } from 'react';

const Add = ({setMovies,movies}) => {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [newTitle,setNewTitle] = useState('');
    const [newRate,setNewRate]= useState(0);
    const [newPoster,setNewPoster] =useState('');
    const [newDescription,setNewDescription]=useState('');
    const NewMovie = () => {
        let newMovie = {
            id: Math.random(),
            name : newTitle,
            discription: newDescription,
            url: newPoster,
            rating: newRate,
        };
    
        setMovies([...movies,newMovie])
        handleClose()
    
      }
  return (
    <div>
            <Button variant="outline-dark" onClick={handleShow} style={{marginLeft:'20px',marginRight:'-40px'}}>
        Add a Film
    </Button>
    <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
          <Modal.Title>Adding New Film to the List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter The Title"
                autoFocus
                onChange={e => setNewTitle(e.target.value)}

              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} 
                              onChange={e => setNewDescription(e.target.value)}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter poster URL"
                autoFocus
                onChange={e => setNewPoster(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter poster URL"
                autoFocus
                onChange={e => setNewRate(e.target.value)}
              />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={NewMovie}>
            Add 
          </Button>
          </Modal.Footer>

</Modal>

    </div>
  )
}

export default Add