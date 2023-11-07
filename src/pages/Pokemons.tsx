import { Center, Flex, Grid, Icon, Image, Spinner, Stack, Text } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import { pokemon_logo } from '../assets'
import Header from '../components/Header'
import CardPokemon from '../components/CardPokemon'
import { getPokemonList } from '../api/requests/pokemon'
import { useInfiniteQuery } from 'react-query'
import { Fragment } from 'react'
import PageLoader from '../components/PageLoader'
import { FaChevronDown } from 'react-icons/fa'

export type TPokemonList = {
    id: string
    name: string
    image: string
    url: string
    isObtained: boolean
}

type PokemonsProps = {
    children?: ReactNode
}

function Pokemons({ children }: PokemonsProps) {
    const {
        data: pokemons,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery('pokemons', ({ pageParam: offset = 0 }) => getPokemonList(offset), {
        getNextPageParam: (last, all) => {
            if (!last.next) return
            let offset = 0
            all.forEach(v => {
                offset += v.data.length
            })
            return offset
        },
        cacheTime: Infinity,
        staleTime: Infinity,
    })

    useEffect(() => {
        let fetch = isFetchingNextPage

        const onScroll = () => {
            if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 100) {
                if (!fetch && !isFetchingNextPage) {
                    fetch = true
                    fetchNextPage()
                }
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [isFetchingNextPage])

    const MyPokemonsMotion: Variants = {
        initial: {
            transform: 'translateX(-100vw)',
        },
        animate: {
            transform: 'translateX(0)',
        },
        exit: {
            transform: 'translateX(-100vw)',
        },
    }

    return (
        <>
            <Header
                variants={MyPokemonsMotion}
                initial='initial'
                animate='animate'
                exit='exit'
            >
                <Image
                    src={pokemon_logo}
                    w='100px'
                />
            </Header>

            <Stack
                as={motion.div}
                variants={MyPokemonsMotion}
                initial='initial'
                animate='animate'
                exit='exit'
                mt='header-height'
                pt='1rem'
                pb='1.5rem'
                spacing='3rem'
            >
                {isLoading && <PageLoader />}
                {!isLoading && (
                    <Grid
                        templateColumns={{
                            base: 'repeat(2, 1fr)',
                            sm: 'repeat(4, 1fr)',
                        }}
                        gap={{
                            base: '1rem',
                            md: '1.5rem',
                        }}
                    >
                        {pokemons?.pages.map((pokemonPage: any, pageKey: number) => (
                            <Fragment key={pageKey}>
                                {pokemonPage.data.map((pokemon: TPokemonList, i: any) => (
                                    <CardPokemon
                                        key={i}
                                        pokemon={pokemon}
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </Grid>
                )}

                {hasNextPage && (
                    <Center>
                        {isFetchingNextPage && (
                            <Spinner
                                h='25px'
                                w='25px'
                                color='primary'
                            />
                        )}
                        {!isFetchingNextPage && (
                            <Flex
                                gap='1rem'
                                align='center'
                                color='primary'
                                _hover={{
                                    color: 'primaryDarker',
                                }}
                                transitionDuration='normal'
                                cursor='pointer'
                                h='25px'
                                onClick={() => fetchNextPage()}
                            >
                                <Icon as={FaChevronDown} />
                                <Text
                                    fontSize='sm'
                                    fontWeight='medium'
                                >
                                    Load more
                                </Text>
                            </Flex>
                        )}
                    </Center>
                )}
            </Stack>

            {children}
        </>
    )
}

export default Pokemons
