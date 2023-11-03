import { Box, Container, Flex, Link, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { ReactNode } from 'react'

function Pokemons({ children }: { children: ReactNode }) {
    return (
        <>
            <Box
                pos='fixed'
                top='0'
                left='0'
                right='0'
                w='body-width'
                zIndex='sticky'
            >
                <Container
                    pos='relative'
                    overflow='hidden'
                >
                    <Flex
                        as={motion.div}
                        initial={{
                            transform: 'translateX(-100%)',
                        }}
                        animate={{
                            transform: 'translateX(0)',
                        }}
                        exit={{
                            transform: 'translateX(-100%)',
                        }}
                        align='center'
                        justify='space-between'
                        h='header-height'
                    >
                        <Text
                            fontWeight='semibold'
                            fontSize='xl'
                        >
                            Pokemon
                        </Text>
                    </Flex>
                </Container>
            </Box>

            <Box
                as={motion.div}
                initial={{
                    transform: 'translateX(-100%)',
                }}
                animate={{
                    transform: 'translateX(0)',
                }}
                exit={{
                    transform: 'translateX(-100%)',
                }}
                mt='header-height'
            >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, a.</Text>
                <Link
                    as={ReactLink}
                    to={PATH.pokemonDetail}
                >
                    Pokemon detail
                </Link>
                <Box h='2000px'></Box>
            </Box>

            {children}
        </>
    )
}

export default Pokemons
