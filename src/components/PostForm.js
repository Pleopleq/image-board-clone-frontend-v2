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
    const [image, setImage] = useState(null)
    const { isLoggedIn, user } = useSelector(state => state.auth)
    const { message } = useSelector(state => state.message)
    const dispatch = useDispatch()

    const clearAlert = useCallback(() =>  {
        dispatch(clearMessage())
    }, [dispatch])

    useEffect(() => {
        clearAlert()
    }, [clearAlert])

    function onImageHandler(e){
        e.preventDefault()
        setImage(e.target.files[0])
    }

    function handleFormSubmit(e) {
        e.preventDefault()

        if(title === "" || body === ""){
            return dispatch(setMessage("Please fill the 'Title' and 'Body' fields."))
        }

        let post = new FormData()

        post.append("title", title)
        post.append("content", body)
        post.append("postImage", image)
        post.append("author", user.loggedUser.username)
        post.append("owner", user.loggedUser._id)
        
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
                <div>
                    <input
                    type="file" 
                    name="postImage"  
                    accept="image/*"
                    onChange={onImageHandler}
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