import React,{useState} from 'react';
import {Modal,Button,Form} from 'react-bootstrap';

const AddMovie = ({addMovie}) => {
    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    const [Title, setTitle] = useState('')
    const [Poster, setPoster] = useState('')
    const [Description, setDescription] = useState('')
    const [rate, setRate] = useState(0)



    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
Add Movie      
</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label> Title</Form.Label>
    <Form.Control type="text" placeholder="Enter The Movie Title" onChange={(e)=>setTitle(e.target.value)} />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Poster</Form.Label>
    <Form.Control type="text" placeholder="Enter The Movie Poster" onChange={(e)=>setPoster(e.target.value)} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter The Movie Description" onChange={(e)=>setDescription(e.target.value)} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Rate</Form.Label>
    <Form.Control type="number" placeholder="Enter The Movie Rate"onChange={(e)=>setRate(e.target.value)} />
  </Form.Group>
  
  
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(Title,Poster,Description,rate);setShow(false)}}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
