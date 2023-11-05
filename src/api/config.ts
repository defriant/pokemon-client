import axios from 'axios'

export const Request = axios.create({
    baseURL: 'http://localhost:8030',
    withCredentials: true,
})
