import axios from 'axios'
const baseURL = 'http://localhost:3001/api/login';

const login = credentials => {
    return axios.post(baseURL, credentials)
    .then((response) => {
        if(response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
    })
}

const logout = () => {
    localStorage.removeItem("user")
}

export default {
    login,
    logout
}