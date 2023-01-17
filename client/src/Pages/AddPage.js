import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addContact } from '../JS/Actions/contact';
import {useNavigate} from "react-router-dom";

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [newContact , setNewContact] = useState({})
  const handelChange = (e) => {
    setNewContact({...newContact , [e.target.name] : e.target.value})
  }

  const handelAdd = () => {
    dispatch(addContact(newContact))
    navigate("/Users-List")
  }


  return (
    <div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control onChange={handelChange} name="name"  type="text" placeholder="Enter Name" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handelChange} name="email" type="email" placeholder="We'll never share your email with anyone else." />

  </Form.Group>

  <Form.Group className="mb-3" >
  <Form.Label>Phone Number</Form.Label>
  <Form.Control onChange={handelChange} name="phoneNumber" type="number" placeholder="Enter Phone Number" />
</Form.Group>

    <Button onClick={handelAdd} variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </div>
  )
}

export default AddPage