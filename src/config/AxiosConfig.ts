import axios from "axios";


export const AxiosConfig =  axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})