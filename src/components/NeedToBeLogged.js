import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    color: #7FDBFF;
`

const StyledSection= styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
`

const NeedToBeLogged = () => {
    return (
        <StyledSection>
            <StyledTitle>Login to add new posts and comment!</StyledTitle>
        </StyledSection>
    )
}

export default NeedToBeLogged