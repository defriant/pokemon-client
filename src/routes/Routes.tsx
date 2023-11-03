import { Suspense, lazy } from 'react'
import { Route, Routes as ReactRoutes, useLocation } from 'react-router-dom'
import { PATH } from './path'
import { AnimatePresence } from 'framer-motion'
import PageLoader from '../components/PageLoader'
import Wrapper from '../pages/Wrapper'

const Pokemons = lazy(() => import('../pages/Pokemons'))
const MyPokemons = lazy(() => import('../pages/MyPokemons'))

function Routes() {
    const location = useLocation()

    return (
        <Suspense fallback={<PageLoader />}>
            <AnimatePresence>
                <ReactRoutes
                    location={location}
                    key={location.pathname}
                >
                    <Route element={<Wrapper />}>
                        <Route
                            path={PATH.pokemons}
                            element={<Pokemons />}
                        />

                        <Route
                            path={PATH.myPokemons}
                            element={<MyPokemons />}
                        />
                    </Route>
                </ReactRoutes>
            </AnimatePresence>
        </Suspense>
    )
}

export default Routes
