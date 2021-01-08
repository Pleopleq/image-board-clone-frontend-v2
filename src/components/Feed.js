import React from 'react'
import Post from "./Post";
import styled from 'styled-components'

const StyledFeed = styled.section`
    background: #001f3f;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:center;
`


const Feed = () => {
    return (
        <StyledFeed>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </StyledFeed>
    )
}

export default Feed