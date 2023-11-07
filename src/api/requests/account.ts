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

export const getPokeball = async () => {
    try {
        if (cookies.get('authorization')) {
            const res = await Request.get('/user/pokeball')
            return res.data
        }

        return undefined
    } catch (err: any) {
        throw err.response
    }
}

export const catchPokemon = async (pokemon_id: number) => {
    try {
        const res = await Request.post('/user/pokemon/catch', { pokemon_id })
        return res.data
    } catch (err: any) {
        throw err.response
    }
}

export const getMyPokemons = async () => {
    try {
        const res = await Request.get('/user/my-pokemons')
        return res.data
    } catch (err: any) {
        throw err.response
    }
}

export const getMyPokemonDetail = async (id: string | undefined) => {
    if (!id) return null

    try {
        const res = await Request.get(`/user/my-pokemons/${id}`)
        return res.data
    } catch (err: any) {
        throw err.response
    }
}
