
function setHeaders(axios) {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
}

export default {
    setHeaders
}