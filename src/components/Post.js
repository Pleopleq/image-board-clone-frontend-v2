import React from 'react'
import styled from 'styled-components'

const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0074D9;
    color: #7FDBFF;
    height: 50%;
    width: 20%;
    margin-bottom: 1rem;
`

const StyledPostImage = styled.img`
    width: 50%
`

const StyledUserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
`

const StyledAuthorThump = styled.img`
    width: 25%;
    border-radius: 2rem;
    margin-right: 1rem;
`

const Post = ({ postId, title, author, postBody, image, id , owner}) => {

    function handleNoImage(){
        if(image === undefined){
            return null
        }
        return <StyledPostImage src={`http://localhost:3001/api/posts/${id}/image`}></StyledPostImage>
    }
    
    return (
            <StyledPost key={postId}>
                <h1>{title}</h1>
                {handleNoImage()}
                <StyledUserContainer>
                    <StyledAuthorThump src={`http://localhost:3001/api/users/${owner}/avatar`} alt="author thumbnail"></StyledAuthorThump>
                    <p>{author}</p>
                </StyledUserContainer>
                <p>{postBody}</p>
            </StyledPost>
    )
}

export default Post