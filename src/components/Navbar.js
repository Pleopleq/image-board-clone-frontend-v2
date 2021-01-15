import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
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
    const { isLoggedIn } = useSelector(state => state.auth)

    const loggedInNavbar = () => {
        if(isLoggedIn) {
            return (
            <>
                <p><Link to='/profile'>Profile</Link></p>
                <p><Link to='/logout'>Logout</Link></p>
            </>
            )
        }

        return (
        <>
            <p><Link to='/register'>Register</Link></p>
            <p><Link to='/login'>Login</Link></p>
        </>
        )
    }
    return (
        <StyledNavbar>
            <p><Link to='/'>Feed</Link></p>
            {loggedInNavbar()}
        </StyledNavbar>
    )
}

export default Navbar