import {
  REQUEST_TOKEN,
  REQUEST_TOKEN_SUCCESS,
  REQUEST_TOKEN_ERROR,
  REQUEST_TOKEN_CANCEL,
  RESET_TOKEN
} from '../actions/token.js'

export default function tokenReducer(token = { value: null, requested: false, error: null }, action) {
  switch (action.type) {
    case REQUEST_TOKEN:
      return {
        value: null,
        requested: true,
        error: null
      }
      
    case REQUEST_TOKEN_SUCCESS:
      return {
        value: action.payload,
        requested: false,
        error: null
      }
      
    case REQUEST_TOKEN_ERROR:
      return {
        value: null,
        requested: false,
        error: action.error
      }
      
    case REQUEST_TOKEN_CANCEL:
      return {
        value: token.value,
        requested: false,
        error: token.error
      }
      
    case RESET_TOKEN:
      return {
        value: null,
        requested: false,
        error: null
      }
    
    
    
    default:
      return token
  }
}