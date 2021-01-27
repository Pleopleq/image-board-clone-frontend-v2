import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { register } from '../actions/auth'
import { clearMessage, setMessage } from '../actions/message';
import styled from "styled-components";

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

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message)
    let history = useHistory();

    const dispatch = useDispatch()

    const clearAlert = useCallback(() =>  {
        dispatch(clearMessage())
    }, [dispatch])

    useEffect(() => {
        clearAlert()
    }, [clearAlert])


    function onRegisterSubmit(e){
        e.preventDefault()

        const registerFields = {
            username,
            password
        }

        if (registerFields.username === "" && registerFields.password === "") {
            return dispatch(setMessage("Please fill all the inputs."))
        }

        dispatch(register(registerFields))
        clearAlert()
        setUsername('')
        setPassword('')
        history.push("/")
    }

    if(isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <>
        <StyledLoginForm>
            <StyledTitle>Register</StyledTitle>
            <form onSubmit={onRegisterSubmit}>
                <div>
                    <StyledLabel>Username</StyledLabel><br/>
                    <input
                    value={username}
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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

export default Register