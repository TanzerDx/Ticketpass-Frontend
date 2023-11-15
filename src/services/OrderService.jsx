import axios from "axios";

const hostname = "http://localhost:8080"

function addOrder(formData) {
    return axios.post(`${hostname}/orders`, formData)
    .then(response => response.data)
}

function getOrder(id) {
    return axios.get(`${hostname}/orders/${id}`)
    .then(response => response.data)
}

function getAllOrders(userId) {
    return axios.get(`${hostname}/orders`, { params: { userId } })
    .then(response => response.data)
}

export default {
    addOrder,
    getOrder,
    getAllOrders
}