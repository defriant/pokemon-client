import axios from 'axios'
import Cookies from 'universal-cookie'

export const cookies = new Cookies()

export const Request = axios.create({
    baseURL: 'http://localhost:8030',
    withCredentials: true,
})
