import AnimateScreen from '../components/AnimateScreen'
import AnimateScreenBody from '../components/AnimateScreenBody'
import { Avatar, Box, Button, Container, Flex, HStack, Icon, Image, Link, Stack, Tag, Text } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { FaArrowLeft, FaLevelUpAlt } from 'react-icons/fa'
import { LuSword, LuSwords } from 'react-icons/lu'
import { BsShield, BsShieldPlus, BsSuitHeart } from 'react-icons/bs'
import { PiSneakerMove } from 'react-icons/pi'
import { CiLineHeight } from 'react-icons/ci'
import { LiaWeightHangingSolid } from 'react-icons/lia'
import PokemonBall from '../components/PokemonBall'
import { MdOutlineCatchingPokemon } from 'react-icons/md'
import { motion } from 'framer-motion'

function PokemonDetail() {
    return (
        <AnimateScreen
            initial={{ top: '100vh' }}
            animate={{ top: '0' }}
            exit={{ top: '100vh' }}
        >
            <Flex
                pos='relative'
                justify='center'
                w='100%'
                pt='4.5rem'
                mb='3rem'
                h={{
                    base: '300px',
                    md: '400px',
                }}
            >
                <Link
                    as={ReactLink}
                    to={PATH.pokemons}
                    pos='absolute'
                    top='1.5rem'
                    left='0'
                    opacity='.5'
                    _hover={{
                        opacity: '1',
                    }}
                >
                    <Icon
                        as={FaArrowLeft}
                        fontSize='22px'
                    />
                </Link>
                <Box
                    pos='absolute'
                    top='1.5rem'
                    right='0'
                >
                    <PokemonBall />
                </Box>
                <Image
                    pos='relative'
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg'
                />
            </Flex>

            <AnimateScreenBody>
                <Stack
                    spacing='3rem'
                    pb={{
                        base: 'calc(calc(80px * 2) + 1.5rem)',
                        lg: 'calc(80px + 1.5rem)',
                    }}
                >
                    <Flex justify='space-between'>
                        <Text
                            fontSize='lg'
                            fontWeight='semibold'
                        >
                            Charrizard
                        </Text>
                        <HStack>
                            <Tag
                                variant='solid'
                                size='sm'
                            >
                                Fire
                            </Tag>
                            <Tag
                                variant='solid'
                                size='sm'
                            >
                                Flying
                            </Tag>
                        </HStack>
                    </Flex>

                    <HStack spacing='3rem'>
                        <Stack>
                            <Text
                                fontWeight='semibold'
                                fontSize='sm'
                            >
                                Weight
                            </Text>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={LiaWeightHangingSolid}
                                    fontSize='20px'
                                />
                                <Text>905</Text>
                            </Flex>
                        </Stack>
                        <Stack>
                            <Text
                                fontWeight='semibold'
                                fontSize='sm'
                            >
                                Height
                            </Text>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={CiLineHeight}
                                    fontSize='20px'
                                />
                                <Text>15</Text>
                            </Flex>
                        </Stack>
                    </HStack>

                    <Stack>
                        <Text
                            fontWeight='semibold'
                            fontSize='sm'
                        >
                            Stats
                        </Text>
                        <HStack
                            gridGap='2rem'
                            rowGap='1rem'
                            flexWrap='wrap'
                        >
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={LuSword}
                                    fontSize='20px'
                                    color='orange.500'
                                />
                                <Text>84</Text>
                            </Flex>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={LuSwords}
                                    fontSize='20px'
                                    color='orange.500'
                                />
                                <Text>109</Text>
                            </Flex>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={BsShield}
                                    fontSize='19px'
                                    color='blue.500'
                                />
                                <Text>78</Text>
                            </Flex>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={BsShieldPlus}
                                    fontSize='19px'
                                    color='blue.500'
                                />
                                <Text>85</Text>
                            </Flex>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={BsSuitHeart}
                                    fontSize='19px'
                                    color='red.500'
                                />
                                <Text>78</Text>
                            </Flex>
                            <Flex
                                align='center'
                                gap='.5rem'
                            >
                                <Icon
                                    as={PiSneakerMove}
                                    fontSize='21px'
                                    color='green.500'
                                />
                                <Text>100</Text>
                            </Flex>
                        </HStack>
                    </Stack>

                    <Stack>
                        <Text
                            fontWeight='semibold'
                            fontSize='sm'
                        >
                            Abilities
                        </Text>
                        <HStack>
                            <Flex
                                gap='.5rem'
                                align='center'
                                py='.25rem'
                                px='.75rem'
                                borderRadius='full'
                                borderWidth='1px'
                                w='max-content'
                            >
                                <Avatar
                                    name='blaze'
                                    color='transparent'
                                    w='15px'
                                    h='15px'
                                />
                                <Text fontSize='sm'>Blaze</Text>
                            </Flex>
                            <Flex
                                gap='.5rem'
                                align='center'
                                py='.25rem'
                                px='.75rem'
                                borderRadius='full'
                                borderWidth='1px'
                                w='max-content'
                            >
                                <Avatar
                                    name='solar-power'
                                    color='transparent'
                                    w='15px'
                                    h='15px'
                                />
                                <Text fontSize='sm'>Solar power</Text>
                            </Flex>
                        </HStack>
                    </Stack>

                    <Stack>
                        <Text
                            fontWeight='semibold'
                            fontSize='sm'
                        >
                            Experience
                        </Text>
                        <Flex
                            align='center'
                            gap='.5rem'
                        >
                            <Icon
                                as={FaLevelUpAlt}
                                fontSize='20px'
                                color='green.500'
                            />
                            <Text>+267</Text>
                        </Flex>
                    </Stack>
                </Stack>

                <Container
                    as={motion.div}
                    initial={{
                        height: '0px',
                        opacity: 0,
                    }}
                    animate={{
                        height: '100px',
                        opacity: 1,
                        transition: {
                            delay: 0.3,
                        },
                    }}
                    exit={{
                        height: '0px',
                        opacity: 0,
                    }}
                    h='100px'
                    pos='fixed'
                    bottom='0'
                    left='0'
                    right='0'
                    overflowX='clip'
                    overflowY='visible'
                >
                    <Stack
                        boxShadow='container'
                        pos='absolute'
                        top='0'
                        left='0'
                        right='0'
                        bottom='0'
                        justify='center'
                        h='100%'
                        px='1rem'
                    >
                        <Text
                            align='center'
                            fontSize={{
                                base: 'xs',
                                md: 'sm',
                            }}
                            fontWeight='medium'
                        >
                            Capture rate : 20%
                        </Text>
                        <Button
                            colorScheme='blue'
                            fontWeight='medium'
                            rounded='full'
                            w='100%'
                            size={{
                                base: 'sm',
                                md: 'md',
                            }}
                            leftIcon={
                                <Icon
                                    as={MdOutlineCatchingPokemon}
                                    fontSize='20px'
                                />
                            }
                        >
                            Catch Charrizard
                        </Button>
                    </Stack>
                </Container>
            </AnimateScreenBody>
        </AnimateScreen>
    )
}

export default PokemonDetail
