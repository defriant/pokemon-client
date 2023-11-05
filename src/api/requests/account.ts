import { Request, cookies } from '../config'

export const profile = async () => {
    try {
        if (cookies.get('authorization')) {
            const res = await Request.get('/user/profile')
            return res.data
        }

        return undefined
    } catch (err: any) {
        throw err.response
    }
}
