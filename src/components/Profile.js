import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAvatar } from '../actions/profile'
import Avatar from './Avatar'
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

const StyledHidden = styled.form`
    display: block;
`

const Profile = () => {
    const { user } = useSelector(state => state.auth)
    const userId = user.loggedUser._id
    const dispatch = useDispatch()
    
    const onSetAvatar = useCallback(() => {
        dispatch(fetchAvatar(userId));
    }, [dispatch, userId]);

    useEffect(() => {
        onSetAvatar()
    },[onSetAvatar])

    return (
        <StyledContainer>
            <StyledProfile>
                <h1>{user.loggedUser.username}</h1>
                <Avatar id={userId}></Avatar>
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