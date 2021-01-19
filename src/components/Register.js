import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory  } from 'react-router-dom'
import { register, login } from '../actions/auth'
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
    const history = useHistory()

    const dispatch = useDispatch()

    function onRegisterSubmit(e){
        e.preventDefault()

        const registerFields = {
            username,
            password
        }

        dispatch(register(registerFields))
            .then(() => {
                dispatch(login(registerFields))
                history.push("/")
            })

        setUsername('')
        setPassword('')
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
                    />
                </div>
                <br/>
                <button type="submit">Log in</button>
            </form>
        </StyledLoginForm>
        </>
    )
}

export default Register