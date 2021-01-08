import React from 'react'
import styled from 'styled-components'

const StyledPost = styled.div`
    background: #0074D9;
    color: #7FDBFF;
    height: 12em;
    width: 200px
`

const Post = () => {
    return (
        <StyledPost>
            <h1>John Doe</h1>
            <p>Male</p>
            <p>1995</p>
        </StyledPost>
    )
}

export default Post