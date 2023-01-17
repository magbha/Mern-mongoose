import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { editContact, getContact } from "../JS/Actions/contact";

const EditPage = () => {
  const [newContact, setNewContact] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const match = useMatch("/edit/:id");
  const selectedContact = useSelector(
    (state) => state.contactReducer.selectedContact
  );
  useEffect(() => {
    dispatch(getContact(match.params.id));
  });

  const handelChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handelEdit = () => {
    dispatch(editContact(match.params.id, newContact));
    navigate("/Users-List");
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handelChange}
            name="name"
            type="text"
            placeholder={selectedContact.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handelChange}
            name="email"
            type="email"
            placeholder={selectedContact.email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={handelChange}
            name="phoneNumber"
            type="number"
            placeholder={selectedContact.phoneNumber}
          />
        </Form.Group>

        <Button onClick={handelEdit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditPage;
