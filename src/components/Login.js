import React, { useState } from 'react';
import styled from 'styled-components';

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

    function onLoginSubmit(){
        const login = {
            username,
            password
        }
        setUsername('')
        setPassword('')
    }

    return (
        <>
        <StyledLoginForm>
            <StyledTitle>Login</StyledTitle>
            <form>
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
                    type="text"
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

export default Login