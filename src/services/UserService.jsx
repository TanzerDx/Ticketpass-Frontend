import axios from "axios";
import TokenService from "./TokenService";

const hostname = "http://localhost:8080"

TokenService.setHeaders(axios);

function Register(formData) {
    return axios.post(`${hostname}/users`, formData)
    .then(response => response.data)
}

function addAdmin(formData) {
    return axios.post(`${hostname}/users/admin`, formData)
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
    TokenService.setHeaders(axios)
    return axios.get(`${hostname}/users/viaToken`, accessToken)
    .then(response => response.data)
}

function banUser(userId) {
    return axios.put(`${hostname}/users/${userId}`)
    .then(response => response.data)
}

export default {
    addAdmin,
    banUser,
    Register,
    Login,
    getUserById,
    getUserByAccessToken
}

