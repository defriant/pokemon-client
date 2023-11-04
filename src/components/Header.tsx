import { Avatar, Box, Container, Flex, Icon, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { MdLogout, MdOutlineCatchingPokemon } from 'react-icons/md'
import { ReactNode } from 'react'
import PokemonBall from './PokemonBall'

type HeaderProps = {
    children?: ReactNode
    variants?: Variants
    initial?: any
    animate?: any
    exit?: any
}

function Header({ children, variants, initial, animate, exit }: HeaderProps) {
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

                    <Flex
                        align='center'
                        gap='1rem'
                    >
                        <PokemonBall />

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
                                        // _focus={{
                                        //     bg: 'transparent',
                                        // }}
                                        // _active={{
                                        //     bg: 'transparent',
                                        // }}
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
                                        // _focus={{
                                        //     bg: 'transparent',
                                        // }}
                                        // _active={{
                                        //     bg: 'transparent',
                                        // }}
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
    )
}

export default Header
