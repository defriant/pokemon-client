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
