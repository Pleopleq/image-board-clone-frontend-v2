import axios from 'axios'
const baseURL = 'http://localhost:3001/api/posts'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const addNewPost = async (newPost) => {
    const response = await axios.post( baseURL, newPost )
    return response.data
}

export default {
    getAll,
    addNewPost
}