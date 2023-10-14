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

function getUser(id) {
    return axios.get(`${hostname}/users/${id}`)
    .then(response => response.data)
}

export default {
    Register,
    Login,
    getUser
}

