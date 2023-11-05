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
    } catch (error) {
        throw error
    }
}
