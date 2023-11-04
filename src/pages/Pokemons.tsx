import { Box, Grid, Image } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { pokemon_logo } from '../assets'
import Header from '../components/Header'
import CardPokemon from '../components/CardPokemon'

type PokemonsProps = {
    children?: ReactNode
}

function Pokemons({ children }: PokemonsProps) {
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

            <Box
                as={motion.div}
                variants={MyPokemonsMotion}
                initial='initial'
                animate='animate'
                exit='exit'
                mt='header-height'
            >
                <Grid
                    templateColumns='repeat(4, 1fr)'
                    gap='1.5rem'
                >
                    <CardPokemon />
                </Grid>
            </Box>

            {children}
        </>
    )
}

export default Pokemons
