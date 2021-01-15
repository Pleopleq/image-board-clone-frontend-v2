import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./type";
import loginService from '../services/login'

export const login = credentials => (dispatch) => {
    return loginService.login(credentials).then(
        response => {
            dispatch({
                type:LOGIN_SUCCESS,
                payload: { user: response }
            })
            return Promise.resolve()
        },
        (error) => {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              dispatch({
                  type: LOGIN_FAIL,
              })

              dispatch({
                  type: SET_MESSAGE,
                  payload:message,
              })

              return Promise.reject()
        } 
    )
}

export const logout = (dispatch) => {
    loginService.logout()

    dispatch({
        type: LOGOUT,
    })
}
