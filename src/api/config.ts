import axios from 'axios'
import Cookies from 'universal-cookie'

export const cookies = new Cookies()

export const Request = axios.create({
    baseURL: 'https://pokemon-server-vert.vercel.app',
    withCredentials: true,
})
