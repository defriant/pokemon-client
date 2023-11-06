import { useQuery } from 'react-query'
import { getPokeball } from '../api/requests/account'
import useAuth from './useAuth'

function usePokeball() {
    const { user } = useAuth()

    const { data, isLoading, refetch } = useQuery(`user-${user?.id}-pokeball`, getPokeball, {
        cacheTime: Infinity,
        staleTime: Infinity,
    })

    return {
        current: data?.current,
        max: data?.max,
        refreshAfter: data?.refreshAfter,
        isLoading,
        refetch,
    }
}

export default usePokeball
