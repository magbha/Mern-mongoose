import { FAIL_CONTACT, GET_CONTACT, GET_CONTACTS, LOAD_CONTACT } from "../ActionsTypes/contact";

const InitialState = {
  contactsList: [],
  selectedContact: {},
  fail: null,
  loading: false,
};

 const contactReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, fail : null , loading: true };
    case GET_CONTACTS:
      return { ...state, fail : null , loading: false, contactsList: payload.listOfContacts};
      case GET_CONTACT : 
      return {...state , fail : null , loading : false , selectedContact : payload.userContact}
      case FAIL_CONTACT : 
      return {...state , fail : {payload} ,loading : false}
    default:
      return state;
  }
};


export default contactReducer;