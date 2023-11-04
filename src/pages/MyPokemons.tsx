import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { ReactNode } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Header from '../components/Header'

type PokemonsProps = {
    children?: ReactNode
}

function MyPokemons({ children }: PokemonsProps) {
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
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, a.</Text>
            </Box>

            {children}
        </>
    )
}

export default MyPokemons
