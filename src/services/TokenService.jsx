
function setHeaders(axios) {
    const token = localStorage.getItem("accessToken");
    
    if (token) {
        console.log(token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
}

export default {
    setHeaders
}