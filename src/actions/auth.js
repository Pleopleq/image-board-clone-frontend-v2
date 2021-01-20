import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./type";

import {errorFormatter, errorHandler} from '../utils/errorHandler'
import authService from '../services/auth'

export const registerAction = (response) => ({
    type: REGISTER_SUCCESS,
    payload: { user: response }
})

export const userLogin = (response) => ({
    type: LOGIN_SUCCESS,
    payload: { user: response }
})

export const userLoginFail = () => ({
    type: LOGIN_FAIL
})

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message
})

export const userLogout = () => ({
    type: LOGOUT
})

export const register = newUserInfo => async (dispatch) => {
    const response = await authService.register(newUserInfo)
    if(response.data.error) {
        const error = errorFormatter(response.data.error) 
        dispatch(userLoginFail())
        dispatch(setMessage(errorHandler(error)))
        return
    }

    dispatch(registerAction(response))
}

export const login = credentials => async (dispatch) => {
    const response = await authService.login(credentials)

    /* if(response === undefined) {
        dispatch(userLoginFail())
        dispatch(setMessage("Invalid username or password."))
        return   
    } */
    dispatch(userLogin(response))
}

export const logout = () => (dispatch) => {
    authService.logout()
    dispatch(userLogout())
}
