import { combineReducers } from 'redux'
import auth from './authReducer'
import message from './messageReducer'
import posts from './postReducer'

export default combineReducers({
    auth,
    message,
    posts
})