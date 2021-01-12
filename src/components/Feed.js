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

const Feed = ({ posts, addPost, onSavePost }) => {
    const reversedPosts = posts.reverse()
    return (
        <>
        <PostForm addPost={addPost} savePost={onSavePost}></PostForm>
        <hr/>
        <StyledFeed>
            {reversedPosts.map((post, index) =>
            <Post 
            key={index}
            postId={post.id}
            title={post.title}
            postBody={post.body}
            ></Post>
            )}
        </StyledFeed>
        </>
    )
}


export default Feed;