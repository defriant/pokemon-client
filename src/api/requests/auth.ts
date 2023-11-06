import { Request } from '../config'

type TLogin = {
    email: string
    password: string
}

export const login = async ({ email, password }: TLogin) => {
    try {
        const res = await Request.post('/auth/login', { email, password })
        return res.data
    } catch (err: any) {
        throw err.response
    }
}

type TRegister = {
    name: string
    email: string
    password: string
}

export const register = async ({ name, email, password }: TRegister) => {
    try {
        const res = await Request.post('/auth/register', { name, email, password })
        return res.data
    } catch (err: any) {
        throw err.response
    }
}
