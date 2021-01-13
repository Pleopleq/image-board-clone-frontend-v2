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
    return (
        <>
        <PostForm addPost={addPost} savePost={onSavePost}></PostForm>
        <hr/>
        <StyledFeed>
            {posts.map((post, index) =>
            <Post 
            key={index}
            postId={post.id}
            title={post.title}
            author={post.author}
            postBody={post.content}
            ></Post>
            )}
        </StyledFeed>
        </>
    )
}


export default Feed;