import React from 'react'
import { Link } from 'react-router-dom'
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
            <p><Link to='/'>Feed</Link></p>
            <p><Link to='/register'>Register</Link></p>
            <p><Link to='/login'>Login</Link></p>
        </StyledNavbar>
    )
}

export default Navbar