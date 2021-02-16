import React from 'react'
import styled from 'styled-components'

const StyledAuthorThump = styled.img`
    width: 25%;
    border-radius: 2rem;
    margin-right: 1rem;
`

const AuthorInfo = (thumbnail, author, index) => {
    return (
        <div key={index}>
            <StyledAuthorThump src={thumbnail} alt="avatar thumbnail"></StyledAuthorThump>
            <p>{author}</p>
        </div>
    )
}

export default AuthorInfo