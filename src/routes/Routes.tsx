import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes as ReactRoutes, useLocation, Navigate } from 'react-router-dom'
import { PATH } from './path'
import { AnimatePresence } from 'framer-motion'
import PageLoader from '../components/PageLoader'
import Layout from '../pages/Layout'

const Pokemons = lazy(() => import('../pages/Pokemons'))
const PokemonDetail = lazy(() => import('../pages/PokemonDetail'))
const MyPokemons = lazy(() => import('../pages/MyPokemons'))

function Routes() {
    const location = useLocation()
    const locationArr = location.pathname?.split('/') ?? []

    return (
        <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode='wait'>
                <ReactRoutes
                    location={location}
                    key={locationArr[1]}
                >
                    <Route element={<Layout />}>
                        <Route
                            path={`${PATH.pokemons}/*`}
                            element={
                                <Pokemons>
                                    <AnimatePresence mode='wait'>
                                        <ReactRoutes
                                            location={location}
                                            key={locationArr[2]}
                                        >
                                            <Route
                                                path={`${PATH.pokemonDetail.replace(PATH.pokemons, '')}`}
                                                element={<PokemonDetail />}
                                            />
                                        </ReactRoutes>
                                    </AnimatePresence>
                                </Pokemons>
                            }
                        />

                        <Route
                            path={PATH.myPokemons}
                            element={<MyPokemons />}
                        />

                        <Route
                            path='/'
                            element={<Navigate to={PATH.pokemons} />}
                        />
                    </Route>
                </ReactRoutes>
            </AnimatePresence>
        </Suspense>
    )
}

export default Routes
