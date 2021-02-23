import React, { useEffect, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAvatar } from '../redux/actions/profile'
import Avatar from './Avatar'
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
    display: none;
`

const Profile = () => {
    const { user } = useSelector(state => state.auth)
    const hidden = useRef(0)
    const userId = user.loggedUser._id
    const dispatch = useDispatch()

    const handleHiddenInput = () => {
        if(hidden.current.style.display === "block") {
            return hidden.current.style.display = "none"
        }
        hidden.current.style.display = "block"
    }
    
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
                <StyledFormVisible onClick={handleHiddenInput}>Upload a profile image</StyledFormVisible>
                <StyledHidden ref={hidden}>
                    <input type="file"></input>
                </StyledHidden>
                <p>{user.loggedUser.description}</p>
            </StyledProfile>
        </StyledContainer>
    )
}

export default Profile