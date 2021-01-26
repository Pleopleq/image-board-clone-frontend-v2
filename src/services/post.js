import axios from 'axios'
const baseURL = 'http://localhost:3001/api/posts'


function authorizationHeader(token) {
    const jwtToken = `Bearer ${token}`
    return jwtToken
} 

const getAll = async () => {
    try {
        const response = await axios.get(baseURL)
        return response.data
    } catch (error) {
        console.log(error)
    }
    
}

const addNewPost = async (newPost, token) => {
    const headers = authorizationHeader(token)
    try {
        const response = await axios.post( baseURL, newPost , {
            headers: {
              'Authorization': headers,
              'Content-Type': 'multipart/form-data'
            }
          })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default {
    getAll,
    addNewPost
}