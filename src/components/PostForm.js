import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearMessage, setMessage } from '../actions/message';
import NeedToBeLogged from './NeedToBeLogged'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    color: #7FDBFF;
`
const StyledLabel = styled.label`
    color: #7FDBFF;
`
const StyledPostForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
`

const PostForm = ({ savePost }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { isLoggedIn, user } = useSelector(state => state.auth)
    const { message } = useSelector(state => state.message)
    const dispatch = useDispatch()

    const clearAlert = useCallback(() =>  {
        dispatch(clearMessage())
    }, [dispatch])

    useEffect(() => {
        clearAlert()
    }, [clearAlert])

    function handleFormSubmit(e) {
        e.preventDefault()

        const post = {
            title,
            likes: 0,
            content: body,
            author: user.loggedUser.username,
            owner: user.loggedUser._id
        }

        if(post.title === "" && post.content === ""){
            return dispatch(setMessage("Please fill the 'Title' and 'Body' fields."))
        }

        savePost(post, user.token)
        setTitle('')
        setBody('')
    }

    function displayForm() {
        if(!isLoggedIn) {
            return <NeedToBeLogged></NeedToBeLogged>
        }
        return (
            <StyledPostForm>
            <StyledTitle>Add post</StyledTitle>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <StyledLabel>Title: </StyledLabel><br/>
                    <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    onClickCapture={clearAlert}
                    />
                </div>
                <div>
                    <StyledLabel>Body: </StyledLabel><br/>
                    <textarea 
                    type="text" 
                    name="body" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                    onClickCapture={clearAlert}
                    />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <div>
                <StyledTitle>{message}</StyledTitle>
            </div>
        </StyledPostForm>
        )
    }

    return ( 
        <>
        {displayForm()}
        </>
    )
}

export default PostForm