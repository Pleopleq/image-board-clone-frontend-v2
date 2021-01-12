import React from 'react';
import Post from "./Post";
import styled from 'styled-components';
import PostForm from './PostForm';

const StyledFeed = styled.section`
    background: #001f3f;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`

const Feed = ({ posts }) => {
    return (
        <>
        <PostForm></PostForm>
        <hr/>
        <StyledFeed>
            <Post posts={posts}></Post>
        </StyledFeed>
        </>
    )
}


export default Feed;