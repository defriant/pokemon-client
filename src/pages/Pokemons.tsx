import { Avatar, Box, Button, Container, Flex, Icon, Image, Link, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { ReactNode } from 'react'
import { pokemon_logo } from '../assets'
import { CgPokemon } from 'react-icons/cg'
import { MdLogout, MdOutlineCatchingPokemon } from 'react-icons/md'

type PokemonsProps = {
    children?: ReactNode
}

function Pokemons({ children }: PokemonsProps) {
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
                    overflowX='clip'
                    overflowY='visible'
                >
                    <Flex
                        as={motion.div}
                        initial={{
                            transform: 'translateX(-100vw)',
                        }}
                        animate={{
                            transform: 'translateX(0)',
                        }}
                        exit={{
                            transform: 'translateX(-100vw)',
                        }}
                        align='center'
                        justify='space-between'
                        h='header-height'
                    >
                        <Image
                            src={pokemon_logo}
                            w='100px'
                        />

                        <Flex
                            align='center'
                            gap='1rem'
                        >
                            <Menu>
                                <MenuButton aria-label='Menu'>
                                    <Avatar
                                        name='Afif Defriant'
                                        size='sm'
                                    />
                                </MenuButton>
                                <MenuList boxShadow='lg'>
                                    <MenuGroup
                                        title='Afif Defriant'
                                        fontSize='sm'
                                    >
                                        <MenuItem
                                            as={ReactLink}
                                            to={PATH.myPokemons}
                                            icon={
                                                <Icon
                                                    as={MdOutlineCatchingPokemon}
                                                    fontSize='16px'
                                                />
                                            }
                                            fontSize='sm'
                                        >
                                            My Pokemon
                                        </MenuItem>
                                        <MenuItem
                                            icon={
                                                <Icon
                                                    as={MdLogout}
                                                    fontSize='16px'
                                                />
                                            }
                                            fontSize='sm'
                                        >
                                            Logout
                                        </MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>
                </Container>
            </Box>

            <Box
                as={motion.div}
                initial={{
                    transform: 'translateX(-100vw)',
                }}
                animate={{
                    transform: 'translateX(0)',
                }}
                exit={{
                    transform: 'translateX(-100vw)',
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
