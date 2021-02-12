import { combineReducers } from 'redux'
import auth from './authReducer'
import message from './messageReducer'
import posts from './postReducer'
import profile from './profileReducer'

export default combineReducers({
    auth,
    message,
    posts,
    profile
})