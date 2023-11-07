import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'universal-cookie'

export const cookies = new Cookies()

export const Request = axios.create({
    baseURL: 'http://localhost:8030',
})

Request.interceptors.request.use(async (config: AxiosRequestConfig): Promise<any> => {
    if (cookies.get('authorization')) {
        config.headers = {
            authorization: cookies.get('authorization'),
        }
    }

    return config
})
