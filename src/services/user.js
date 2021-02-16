import axios from 'axios'

const getAvatar = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/users/${userId}/avatar`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default { getAvatar }