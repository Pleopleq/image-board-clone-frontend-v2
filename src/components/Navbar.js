import React from 'react'
import styled from 'styled-components';

const StyledNavbar = styled.nav`
    color: white;
    padding: 1em;
    background: cornflowerblue;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
`;

const Navbar = () => {
    return (
    <StyledNavbar>
        <p>Register</p>
        <p>Login</p>
    </StyledNavbar>
    )
}

export default Navbar