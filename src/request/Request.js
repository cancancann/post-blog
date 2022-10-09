import axios from "axios";


const request = axios.create({
    baseURL:'http://'+process.env.REACT_APP_API_URL
})

export {request}