import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../actions/auth'
import styled from 'styled-components';
import { clearMessage, setMessage } from '../actions/message';

const StyledLoginForm = styled.section`
    background: #001f3f;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`
const StyledTitle = styled.h1`
    color: #7FDBFF;
`
const StyledLabel = styled.label`
    color: #7FDBFF;
`

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { isLoggedIn } = useSelector(state => state.auth)
    const { message } = useSelector(state => state.message)

    const dispatch = useDispatch()

    function handleUsernameInput(e) {
        setUsername(e.target.value)
    }

    function handlePasswordInput(e) {
        setPassword(e.target.value)
    }

    const clearAlert = useCallback(() =>  {
        dispatch(clearMessage())
    }, [dispatch])

    useEffect(() => {
        clearAlert()
    }, [clearAlert])

    function onLoginSubmit(e){
        e.preventDefault()

        const loginFields = {
            username,
            password
        }

        if (loginFields.username === "" && loginFields.password === "") {
            return dispatch(setMessage("Please fill all the inputs."))
        }

        dispatch(login(loginFields))
        clearAlert()
        setUsername('')
        setPassword('')
    }

    if(isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <>
        <StyledLoginForm>
            <StyledTitle>Login</StyledTitle>
            <form onSubmit={onLoginSubmit}>
                <div>
                    <StyledLabel>Username</StyledLabel><br/>
                    <input
                    value={username}
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleUsernameInput}
                    onClickCapture={clearAlert}
                    />
                </div>
                <div>
                    <StyledLabel>Password</StyledLabel><br/>
                    <input
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handlePasswordInput}
                    onClickCapture={clearAlert}
                    />
                </div>
                <br/>
                <button type="submit">Log in</button>
            </form>
            <div>
                <StyledTitle>{message}</StyledTitle>
            </div>
        </StyledLoginForm>
        </>
    )
}

export default Login