import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
    // timeout: 1000
});
api.interceptors.request.use((config) => {
    console.log('Request Config: ', JSON.stringify(config, null, 2));
    return config
}, (error) => {
    console.log('Request Error: ', error);
    return Promise.reject(error)
})

api.interceptors.response.use((response) => {
    console.log('Response Config: ', JSON.stringify(response, null, 2));
    return response
}, (error) => {
    console.log('Respose Error: ', error);
    Promise.reject(error)
})

export default api