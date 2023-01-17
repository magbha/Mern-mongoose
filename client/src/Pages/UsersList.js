import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/Actions/contact";
import Spinner from 'react-bootstrap/Spinner';
import UserCard from '../Components/UserCard';
import "./Styles.css"

const UsersList = () => {
  const dispatch = useDispatch();
  const Contacts = useSelector((state) => state.contactReducer.contactsList);
  const Load = useSelector((state) => state.contactReducer.loading)

  
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className='Container'>
    {Load ? <Spinner animation="border" /> : Contacts.map((el) => <UserCard contact={el} key={el._id} />) }
    </div>
  )
}

export default UsersList