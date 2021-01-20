import axios from 'axios'
const baseLoginURL = 'http://localhost:3001/api/login';
const baseRegisterURL = 'http://localhost:3001/api/users'

const register = async newUser => {
    try {
        const response = await axios.post(baseRegisterURL, newUser)
        return response.data
    } catch (error) {
        return error.response
    }
}

const login = async credentials => {
    try {
    const response = await axios.post(baseLoginURL, credentials)

        if(response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }

    return response.data
    } catch (error) {
        return error.response
    }
}

const logout = () => {
    localStorage.removeItem("user")
}

export default {
    login,
    logout,
    register
}