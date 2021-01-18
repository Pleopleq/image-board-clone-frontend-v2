import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, savePost, addPost } from '../actions/posts'
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

const Feed = () => {
    const posts = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    const onAddPost = (post) => {
    dispatch(addPost(post))
    }

    const onSave = (post, token) => {
    dispatch(savePost(post, token))
    }

    const onLoad = useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
        onLoad()
    }, [onLoad])

    function handlePostRender() {
        if(!posts){
            return null
        } else {
            return (posts.map((post, index) =>
            <Post 
            key={index}
            postId={post.id}
            title={post.title}
            author={post.author}
            postBody={post.content}
            ></Post>
            ))
        }
    }

    return (
        <>
        <PostForm addPost={onAddPost} savePost={onSave}></PostForm>
        <hr/>
        <StyledFeed>
            {handlePostRender()}
        </StyledFeed>
        </>
    )
}


export default Feed;