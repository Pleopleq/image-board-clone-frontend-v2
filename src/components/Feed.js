import React, { useState, useEffect } from 'react';
import Post from "./Post";
import styled from 'styled-components';

const StyledFeed = styled.section`
    background: #001f3f;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`


const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
      }, []);

        return (
        <StyledFeed>
            <Post posts={posts}></Post>
        </StyledFeed>
    )
}

export default Feed