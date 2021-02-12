import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.img`
    width: 20%;
`

const Avatar = ({ avatar }) => {
    function handleNoImage(){
        if(!avatar || avatar.size === 0){
            return <StyledAvatar src ={"http://localhost:3001/blank-profile.jpg"}></StyledAvatar>
        }
        return <StyledAvatar src={URL.createObjectURL(avatar)} alt="avatar"></StyledAvatar>
    }
    return ( handleNoImage() )
}

export default Avatar