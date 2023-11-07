import { Suspense, lazy } from 'react'
import { Route, Routes as ReactRoutes, useLocation, Navigate } from 'react-router-dom'
import { PATH } from './path'
import { AnimatePresence } from 'framer-motion'
import PageLoader from '../components/PageLoader'

const Layout = lazy(() => import('../components/Layout'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))
const Pokemons = lazy(() => import('../pages/Pokemons'))
const PokemonDetail = lazy(() => import('../pages/PokemonDetail'))
const MyPokemons = lazy(() => import('../pages/MyPokemons'))
const MyPokemonDetail = lazy(() => import('../pages/MyPokemonDetail'))

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

                        <Route element={<PrivateRoute />}>
                            <Route
                                path={`/${PATH.myPokemons}/*`}
                                element={
                                    <MyPokemons>
                                        <AnimatePresence mode='wait'>
                                            <ReactRoutes
                                                location={location}
                                                key={locationArr[2]}
                                            >
                                                <Route
                                                    path={`${PATH.myPokemonDetail.replace(PATH.myPokemons, '')}`}
                                                    element={<MyPokemonDetail />}
                                                />
                                            </ReactRoutes>
                                        </AnimatePresence>
                                    </MyPokemons>
                                }
                            />
                        </Route>

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
