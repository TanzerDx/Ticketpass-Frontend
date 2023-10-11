import axios from "axios";

const hostname = "http://localhost:8080"

function getAllConcerts() {
    return axios.get(`${hostname}/concerts`)
    .then(response => response.data)
}

export default {
    getAllConcerts
}