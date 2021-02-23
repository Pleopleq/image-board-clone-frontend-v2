import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.img`
    width: 20%;
`

const Avatar = ({ id }) => {
    const [avatar, setAvatar] = useState('')

    const handleAvatar = useCallback(async () => {
        const response = await fetch(`http://localhost:3001/api/users/${id}/avatar`)
        if(response.ok){
            return setAvatar(`http://localhost:3001/api/users/${id}/avatar`)
        }
        return setAvatar('http://localhost:3001/blank-profile.jpg')
    },[id])

    useEffect(() => {
        handleAvatar()
    },[handleAvatar])
    
    return <StyledAvatar src={avatar} alt="avatar"></StyledAvatar>
}

export default Avatar