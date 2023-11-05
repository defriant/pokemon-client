import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { Suspense } from 'react'
import PageLoader from '../components/PageLoader'
import { PATH } from './path'

function PrivateRoute() {
    const { user, isAuthenticating, isAuthenticated } = useAuth()

    if (isAuthenticating) return <PageLoader />
    if (isAuthenticated && !user)
        return (
            <Suspense fallback={<PageLoader />}>
                <Navigate to={PATH.pokemons} />
            </Suspense>
        )

    return (
        <Suspense fallback={<PageLoader />}>
            <Outlet />
        </Suspense>
    )
}

export default PrivateRoute
