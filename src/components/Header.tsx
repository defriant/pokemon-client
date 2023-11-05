import { Avatar, Box, Button, Container, Flex, Icon, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { MdLogin, MdLogout, MdOutlineCatchingPokemon } from 'react-icons/md'
import { ReactNode } from 'react'
import PokemonBall from './PokemonBall'
import useAuth from '../hooks/useAuth'
import { cookies } from '../api/config'

type HeaderProps = {
    children?: ReactNode
    variants?: Variants
    initial?: any
    animate?: any
    exit?: any
}

function Header({ children, variants, initial, animate, exit }: HeaderProps) {
    const { user, setUser } = useAuth()

    const handleLogout = () => {
        cookies.remove('authorization')
        setUser(undefined)
    }

    return (
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
                    variants={variants}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    align='center'
                    justify='space-between'
                    h='header-height'
                >
                    <Box>{children}</Box>

                    {user && (
                        <Flex
                            align='center'
                            gap='1rem'
                        >
                            <PokemonBall />

                            <Menu>
                                <MenuButton aria-label='Menu'>
                                    <Avatar
                                        name={user.name}
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
                                                    transform='rotate(180deg)'
                                                />
                                            }
                                            fontSize='sm'
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </MenuItem>
                                    </MenuGroup>
                                </MenuList>
                            </Menu>
                        </Flex>
                    )}

                    {!user && (
                        <Button
                            variant='outline'
                            size='sm'
                            colorScheme='yellow'
                            leftIcon={
                                <Icon
                                    as={MdLogin}
                                    fontSize='16px'
                                />
                            }
                        >
                            Sign in
                        </Button>
                    )}
                </Flex>
            </Container>
        </Box>
    )
}

export default Header
