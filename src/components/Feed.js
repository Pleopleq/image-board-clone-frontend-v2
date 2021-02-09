import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, savePost } from '../actions/posts'
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
            id={post._id}
            title={post.title}
            image={post.image}
            author={post.author}
            postBody={post.content}
            owner={post.owner}
            ></Post>)
            )
        }
    }

    return (
        <>
        <PostForm savePost={onSave}></PostForm>
        <hr/>
        <StyledFeed>
            {handlePostRender()}
        </StyledFeed>
        </>
    )
}


export default Feed;