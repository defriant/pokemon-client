import { Box, Container, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { PATH } from '../routes/path'

function Wrapper() {
    return (
        <Container
            py='1.5rem'
            boxShadow='container'
            pos='relative'
            overflowX='hidden'
            minH='100vh'
        >
            <Box
                pos='fixed'
                top='0'
                left='0'
                w='body-width'
                zIndex='sticky'
            >
                <Container h='header-height'>
                    <Flex
                        align='center'
                        justify='space-between'
                        h='100%'
                    >
                        <Text
                            fontWeight='semibold'
                            fontSize='xl'
                        >
                            Pokemon
                        </Text>

                        <Flex
                            align='center'
                            gap='1rem'
                        >
                            <Link
                                as={NavLink}
                                to={PATH.pokemons}
                            >
                                All
                            </Link>
                            <Link
                                as={NavLink}
                                to={PATH.myPokemons}
                            >
                                My Pokemon
                            </Link>
                        </Flex>
                    </Flex>
                </Container>
            </Box>

            <Box
                pos='relative'
                mt='header-height'
                py='.5rem'
            >
                <Outlet />
            </Box>
        </Container>
    )
}

export default Wrapper
