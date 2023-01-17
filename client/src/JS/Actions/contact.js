import axios from "axios"
import { FAIL_CONTACT, GET_CONTACT, GET_CONTACTS , LOAD_CONTACT } from "../ActionsTypes/contact"

export const getContacts = () => async (dispatch) => {
    dispatch({type : LOAD_CONTACT})
    try {
        let resault = await axios.get("/api/contact/all-users")
        dispatch({type : GET_CONTACTS , payload : resault.data})
    } catch (error) {
        dispatch({type : FAIL_CONTACT , payload : error.response})
    }
}  

export const addContact = (newContact) => async (dispatch) => {
    dispatch({type : LOAD_CONTACT})
    try {
        let resault = await axios.post("/api/contact/add" , newContact) 
        dispatch(getContacts())
    } catch (error) {
        dispatch({type : FAIL_CONTACT , payload : error.response})
    }
}

export const deleteContact = (id) => async (dispatch) => {
    dispatch({type : LOAD_CONTACT})
    try {
        let resault = await axios.delete(`/api/contact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        dispatch({type : FAIL_CONTACT , payload : error.response})
    }
}

export const editContact = (id , newContact) => async (dispatch) => {
    dispatch({type : LOAD_CONTACT})
    try {
     await axios.put(`/api/contact/${id}` , newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch({type : FAIL_CONTACT , payload : error.response})
    }
}

export const getContact = (id) => async (dispatch) => {
    dispatch({type : LOAD_CONTACT})
    try {
        let resault = await axios.get(`/api/contact/${id}`)
        dispatch({type : GET_CONTACT , payload : resault.data})
    } catch (error) {
        dispatch({type : FAIL_CONTACT , payload : error.response})
    }
}  