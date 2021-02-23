import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./type";

import {errorFormatter, errorHandler} from '../../utils/errorHandler'
import authService from '../../services/auth'

export const registerAction = () => ({
    type: REGISTER_SUCCESS
})

export const registerFail = () => ({
    type: REGISTER_FAIL
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

    if(response.data) {
        let minCharError = errorFormatter(response.data.error, " ", "minimum")
        let uniqueUserError = errorFormatter(response.data.error, " ", "unique.")
        if(minCharError) {
            dispatch(registerFail())
            dispatch(setMessage(errorHandler("minimumChar", minCharError)))
            minCharError = false
            return
        } else if(uniqueUserError) {
            dispatch(registerFail())
            dispatch(setMessage(errorHandler("uniqueUser", uniqueUserError)))
            uniqueUserError = false
            return
        }
    }
    
    dispatch(registerAction()) 
}

export const login = credentials => async (dispatch) => {
    const response = await authService.login(credentials)
    
    if(response.data) {
        dispatch(userLoginFail())
        dispatch(setMessage("Invalid username or password."))
        return   
    }

    dispatch(userLogin(response))
}

export const logout = () => (dispatch) => {
    authService.logout()
    dispatch(userLogout())
}
