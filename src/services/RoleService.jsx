import axios from "axios";

const hostname = "http://localhost:8080"

function createRole(formData) {
    return axios.post(`${hostname}/roles`, formData)
    .then(response => response.data)
}

export default {
    createRole,
}