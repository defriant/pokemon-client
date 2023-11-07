import { Request } from '../config'

export const getPokemonList = async (offset: number) => {
    try {
        const res = await Request.get('/pokemons', {
            params: {
                limit: 20,
                offset,
            },
        })
        return res.data
    } catch (err: any) {
        throw err.response
    }
}

export const getPokemonDetail = async (id: string | undefined) => {
    if (!id) return null

    try {
        const res = await Request.get(`/pokemons/${id}`)
        return res.data
    } catch (err: any) {
        throw err.response
    }
}
