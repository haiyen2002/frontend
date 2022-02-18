import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://chaothubay.herokuapp.com/"
})