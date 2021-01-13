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

const Post = ({ postId, title, author, postBody }) => {
    return (
            <StyledPost key={postId}>
                <h1>{title}</h1>
                <StyledPostImage src="https://www.colorcombos.com/images/colors/010101.png"></StyledPostImage>
                <p>Author: {author}</p>
                <p>{postBody}</p>
            </StyledPost>
    )
}

export default Post