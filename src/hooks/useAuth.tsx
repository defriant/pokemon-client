import { useQuery, useQueryClient } from 'react-query'
import { profile } from '../api/requests/account'
import { cookies } from '../api/config'

export type TUser = {
    id: string
    name: string
    email: string
}

function useAuth() {
    const queryClient = useQueryClient()
    const auth = useQuery('auth', profile, {
        cacheTime: Infinity,
        staleTime: Infinity,
        enabled: false,
        onError: (err: any) => {
            if (err.status === 401 && cookies.get('authorization')) cookies.remove('authorization')
        },
    })

    const user: TUser | undefined = queryClient.getQueryData('auth')
    const setUser = (data: TUser | undefined) => queryClient.setQueryData('auth', data)

    const isAuthenticating = auth.isLoading
    const isAuthenticated = auth.isFetched
    const authenticate = auth.refetch

    return {
        user,
        setUser,
        isAuthenticated,
        isAuthenticating,
        authenticate,
    }
}

export default useAuth
