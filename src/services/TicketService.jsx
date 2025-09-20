import axios from "axios";
import TokenService from "./TokenService";

const hostname = "http://localhost:8080";

TokenService.setHeaders(axios);

function addTickets(order) {
  return axios
    .post(`${hostname}/tickets`, order)
    .then((response) => response.data);
}

function getTickets(id) {
  return axios
    .get(`${hostname}/tickets/${id}`)
    .then((response) => response.data);
}

export default {
  addTickets,
  getTickets,
};
