import axios from "axios";
import TokenService from "./TokenService";

const hostname = "http://localhost:8080"

TokenService.setHeaders(axios);

function addConcert(formData) {
    return axios.post(`${hostname}/concerts`, formData)
    .then(response => response.data)
}

function getAllConcerts() {
    return axios.get(`${hostname}/concerts`)
    .then(response => response.data)
}

function getConcert(id) {
    return axios.get(`${hostname}/concerts/${id}`)
    .then(response => response.data)
}

export default {
    addConcert,
    getAllConcerts,
    getConcert
}