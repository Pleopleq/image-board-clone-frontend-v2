import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import getAvatar from '../services/user'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledProfile = styled.div`
    background:cornflowerblue;
    width: 50%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center
`

const StyledFormVisible = styled.p`
    color: white;
    text-decoration: underline;
    cursor: pointer;
    :hover {
        color: blue;
    }
`

const StyledAvatar = styled.img`
    width: 20%;
`
const StyledHidden = styled.form`
    display: block;
`

const Profile = () => {
    const [avatar, setAvatar] = useState('')
    const { user } = useSelector(state => state.auth)
    const userId = user.loggedUser._id

    useEffect(() => {
        setAvatar(getAvatar(userId))
    },[userId])

    function handleNoImage(){
        if(avatar === ""){
            return <StyledAvatar src="http://localhost:3001/blank-profile.jpg"></StyledAvatar>
        }
        return <StyledAvatar src={`http://localhost:3001/api/users/${userId}/avatar`}></StyledAvatar>
    }

    return (
        <StyledContainer>
            <StyledProfile>
                <h1>{user.loggedUser.username}</h1>
                {handleNoImage()}
                <StyledFormVisible>Upload a profile image</StyledFormVisible>
                <StyledHidden>
                    <input type="file"></input>
                </StyledHidden>
                <p>{user.loggedUser.description}</p>
            </StyledProfile>
        </StyledContainer>
    )
}

export default Profile