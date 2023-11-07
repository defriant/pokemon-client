import { Box, Flex, Grid, Icon, Link, Text } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { ReactNode } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Header from '../components/Header'
import { useQuery } from 'react-query'
import useAuth from '../hooks/useAuth'
import { getMyPokemons } from '../api/requests/account'
import PageLoader from '../components/PageLoader'
import { TPokemonList } from './Pokemons'
import CardPokemon from '../components/CardPokemon'

type PokemonsProps = {
    children?: ReactNode
}

function MyPokemons({ children }: PokemonsProps) {
    const { user } = useAuth()
    const { data: pokemons, isLoading } = useQuery(`pokemons-${user?.id}`, getMyPokemons)

    const MyPokemonsMotion: Variants = {
        initial: {
            transform: 'translateX(100vw)',
        },
        animate: {
            transform: 'translateX(0)',
        },
        exit: {
            transform: 'translateX(100vw)',
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
                <Flex
                    align='center'
                    gap='1rem'
                >
                    <Link
                        as={ReactLink}
                        to={PATH.pokemons}
                        opacity='.5'
                        _hover={{
                            opacity: '1',
                        }}
                        lineHeight='0'
                    >
                        <Icon
                            as={FaArrowLeft}
                            fontSize='18px'
                        />
                    </Link>
                    <Text
                        fontSize='md'
                        fontWeight='semibold'
                    >
                        My Pokemon
                    </Text>
                </Flex>
            </Header>

            <Box
                as={motion.div}
                variants={MyPokemonsMotion}
                initial='initial'
                animate='animate'
                exit='exit'
                mt='header-height'
            >
                {isLoading && <PageLoader />}
                {!isLoading && pokemons && (
                    <>
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
                            {pokemons?.map((pokemon: TPokemonList, i: number) => (
                                <CardPokemon
                                    key={i}
                                    pokemon={pokemon}
                                    myPokemon
                                />
                            ))}
                        </Grid>
                    </>
                )}
            </Box>

            {children}
        </>
    )
}

export default MyPokemons
