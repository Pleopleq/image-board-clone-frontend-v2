import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const StyledProfile = styled.div`
    background:cornflowerblue;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center
`

const StyledAvatar = styled.img`
    width: 25%;
`

const Profile = () => {
    const { user } = useSelector(state => state.auth)
    console.log(user)
    return (
        <StyledProfile>
            <h1>{user.loggedUser.username}</h1>
            <StyledAvatar src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_640.png"}></StyledAvatar>
            <p>Description</p>
        </StyledProfile>
        
    )
}

export default Profile