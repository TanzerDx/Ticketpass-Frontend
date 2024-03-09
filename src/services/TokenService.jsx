
function setHeaders(axios) {
    const token = localStorage.getItem("accessToken");

    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
}

export default {
    setHeaders
}