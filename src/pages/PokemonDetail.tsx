import AnimateScreen from '../components/AnimateScreen'
import AnimateScreenBody from '../components/AnimateScreenBody'
import {
    Alert,
    AlertIcon,
    Avatar,
    Box,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Tag,
    Text,
    Tooltip,
} from '@chakra-ui/react'
import { Link as ReactLink, useParams } from 'react-router-dom'
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
import { UseQueryResult, useQuery } from 'react-query'
import { getPokemonDetail } from '../api/requests/pokemon'
import PageLoader from '../components/PageLoader'
import useAuth from '../hooks/useAuth'

function PokemonDetail() {
    const { user } = useAuth()
    const { pokemon_id } = useParams()
    const { data, isLoading, isSuccess, isError, error }: UseQueryResult<any, any> = useQuery(
        `pokemon-${pokemon_id}`,
        () => getPokemonDetail(pokemon_id),
        {
            cacheTime: Infinity,
            staleTime: Infinity,
        },
    )

    return (
        <AnimateScreen
            initial={{ top: '100vh' }}
            animate={{ top: '0' }}
            exit={{ top: '100vh' }}
        >
            {isLoading && <PageLoader />}

            {!isLoading && isError && (
                <>
                    <Box
                        pos='relative'
                        w='100%'
                        pt='4.5rem'
                        mb='3rem'
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
                    </Box>
                    <Center
                        w='100%'
                        h='50vh'
                    >
                        <Stack align='center'>
                            <Text fontSize='4xl'>{error?.status}</Text>
                            <Text fontSize='lg'>{error?.data?.message ?? error?.statusText}</Text>
                        </Stack>
                    </Center>
                </>
            )}

            {!isLoading && isSuccess && (
                <>
                    <Grid
                        templateRows={user ? '1fr 100px' : '1fr'}
                        h='100vh'
                        overflow='hidden'
                        pos='absolute'
                        top='0'
                        right='0'
                        left='0'
                        bottom='0'
                    >
                        <Box overflow='auto'>
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
                                    left='1.5rem'
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
                                {user && (
                                    <Box
                                        pos='absolute'
                                        top='1.5rem'
                                        right='1.5rem'
                                    >
                                        <PokemonBall />
                                    </Box>
                                )}

                                <Image
                                    pos='relative'
                                    src={data?.sprites?.other?.dream_world?.front_default}
                                />
                            </Flex>

                            <AnimateScreenBody>
                                <Stack
                                    spacing='3rem'
                                    px='1.25rem'
                                >
                                    <Flex justify='space-between'>
                                        <Text
                                            fontSize='lg'
                                            fontWeight='semibold'
                                            _firstLetter={{
                                                textTransform: 'capitalize',
                                            }}
                                        >
                                            {data?.name?.replaceAll('-', ' ')}
                                        </Text>
                                        <HStack>
                                            {data?.types?.map((t: any, i: number) => (
                                                <Tag
                                                    key={i}
                                                    variant='solid'
                                                    size='sm'
                                                >
                                                    {t.type.name}
                                                </Tag>
                                            ))}
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
                                                <Text>{data?.weight}</Text>
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
                                                <Text>{data?.height}</Text>
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
                                            <Tooltip label='Attack'>
                                                <Flex
                                                    align='center'
                                                    gap='.5rem'
                                                >
                                                    <Icon
                                                        as={LuSword}
                                                        fontSize='20px'
                                                        color='orange.500'
                                                    />
                                                    <Text>{data?.stats?.find((s: any) => s.stat.name === 'attack')?.base_stat ?? '-'}</Text>
                                                </Flex>
                                            </Tooltip>

                                            <Tooltip label='Special Attack'>
                                                <Flex
                                                    align='center'
                                                    gap='.5rem'
                                                >
                                                    <Icon
                                                        as={LuSwords}
                                                        fontSize='20px'
                                                        color='orange.500'
                                                    />
                                                    <Text>{data?.stats?.find((s: any) => s.stat.name === 'special-attack')?.base_stat ?? '-'}</Text>
                                                </Flex>
                                            </Tooltip>

                                            <Tooltip label='Defense'>
                                                <Flex
                                                    align='center'
                                                    gap='.5rem'
                                                >
                                                    <Icon
                                                        as={BsShield}
                                                        fontSize='19px'
                                                        color='blue.500'
                                                    />
                                                    <Text>{data?.stats?.find((s: any) => s.stat.name === 'defense')?.base_stat ?? '-'}</Text>
                                                </Flex>
                                            </Tooltip>

                                            <Tooltip label='Special Defense'>
                                                <Flex
                                                    align='center'
                                                    gap='.5rem'
                                                >
                                                    <Icon
                                                        as={BsShieldPlus}
                                                        fontSize='19px'
                                                        color='blue.500'
                                                    />
                                                    <Text>{data?.stats?.find((s: any) => s.stat.name === 'special-defense')?.base_stat ?? '-'}</Text>
                                                </Flex>
                                            </Tooltip>

                                            <Tooltip label='Health'>
                                                <Flex
                                                    align='center'
                                                    gap='.5rem'
                                                >
                                                    <Icon
                                                        as={BsSuitHeart}
                                                        fontSize='19px'
                                                        color='red.500'
                                                    />
                                                    <Text>{data?.stats?.find((s: any) => s.stat.name === 'hp')?.base_stat ?? '-'}</Text>
                                                </Flex>
                                            </Tooltip>

                                            <Tooltip label='Speed'>
                                                <Flex
                                                    align='center'
                                                    gap='.5rem'
                                                >
                                                    <Icon
                                                        as={PiSneakerMove}
                                                        fontSize='21px'
                                                        color='green.500'
                                                    />
                                                    <Text>{data?.stats?.find((s: any) => s.stat.name === 'speed')?.base_stat ?? '-'}</Text>
                                                </Flex>
                                            </Tooltip>
                                        </HStack>
                                    </Stack>

                                    <Stack>
                                        <Text
                                            fontWeight='semibold'
                                            fontSize='sm'
                                        >
                                            Abilities
                                        </Text>
                                        <HStack flexWrap='wrap'>
                                            {data?.abilities?.map((ab: any, i: number) => (
                                                <Flex
                                                    key={i}
                                                    gap='.5rem'
                                                    align='center'
                                                    py='.25rem'
                                                    px='.75rem'
                                                    borderRadius='full'
                                                    borderWidth='1px'
                                                    w='max-content'
                                                >
                                                    <Avatar
                                                        name={ab.ability?.name?.replaceAll('-', ' ')}
                                                        color='transparent'
                                                        w='15px'
                                                        h='15px'
                                                    />
                                                    <Text
                                                        fontSize='sm'
                                                        _firstLetter={{ textTransform: 'capitalize' }}
                                                    >
                                                        {ab.ability?.name?.replaceAll('-', ' ')}
                                                    </Text>
                                                </Flex>
                                            ))}
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
                                            <Text>+{data?.base_experience}</Text>
                                        </Flex>
                                    </Stack>
                                    {!user && (
                                        <Alert
                                            status='info'
                                            fontSize='sm'
                                            borderRadius='6px'
                                        >
                                            <AlertIcon fontSize='12px' />
                                            <Text>Login to catch {data?.name.replaceAll('-', ' ')}</Text>
                                        </Alert>
                                    )}
                                </Stack>
                            </AnimateScreenBody>
                        </Box>

                        {user && <Box />}
                    </Grid>

                    {user && (
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
                                    Capture rate : {data?.capture_rate}%
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
                                    <Flex gap='.4rem'>
                                        <Text>Catch</Text>
                                        <Text _firstLetter={{ textTransform: 'capitalize' }}>{data?.name.replaceAll('-', ' ')}</Text>
                                    </Flex>
                                </Button>
                            </Stack>
                        </Container>
                    )}
                </>
            )}
        </AnimateScreen>
    )
}

export default PokemonDetail
