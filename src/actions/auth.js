import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./type";
import loginService from '../services/login'

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

export const login = credentials => (dispatch) => {
    return loginService.login(credentials).then(
        response => {
            dispatch(userLogin(response))
            return Promise.resolve()
        },
        (error) => {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              dispatch(userLoginFail())
              dispatch(setMessage(message))

              return Promise.reject()
        } 
    )
}

export const logout = (dispatch) => {
    loginService.logout()
    dispatch(userLogout())
}
