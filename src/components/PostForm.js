import React, { useState }from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    color: #7FDBFF;
`
const StyledLabel = styled.label`
    color: #7FDBFF;
`
const StyledPostForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
`

const PostForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    function handleFormSubmit(e) {
        e.preventDefault()
        const post = {
            title,
            body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }


    return (
        <StyledPostForm>
            <StyledTitle>Add post</StyledTitle>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <StyledLabel>Title: </StyledLabel><br/>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <StyledLabel>Body: </StyledLabel><br/>
                    <textarea type="text" name="body" value={body} onChange={(e) => setBody(e.target.value)}/>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </StyledPostForm>
    )
}

export default PostForm