import axios from "axios";

const hostname = "http://localhost:8080"

function Register(formData) {
    return axios.post(`${hostname}/users`, formData)
    .then(response => response.data)
}

function Login(formData) {
    return axios.post(`${hostname}/users/login`, formData)
    .then(response => response.data)
}

function getUserById(id) {
    return axios.get(`${hostname}/users/${id}`)
    .then(response => response.data)
}

function getUserByAccessToken(accessToken) {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    return axios.get(`${hostname}/users/viaToken`, config)
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching user data:", error);
            throw error;
        });
}

export default {
    Register,
    Login,
    getUserById,
    getUserByAccessToken
}

