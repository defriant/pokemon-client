import { Box, Flex, Icon, Image, Link, Stack, Text, Tooltip } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { TPokemonList } from '../pages/Pokemons'
import { MdCatchingPokemon } from 'react-icons/md'

type CardPokemonProps = {
    pokemon: TPokemonList
    myPokemon?: boolean
}

function CardPokemon({ pokemon, myPokemon = false }: CardPokemonProps) {
    return (
        <Link
            as={ReactLink}
            to={myPokemon ? PATH.myPokemonDetail.replace(':pokemon_id', pokemon.name) : PATH.pokemonDetail.replace(':pokemon_id', pokemon.name)}
            _hover={{
                textDecor: 'none',
            }}
            h='100%'
        >
            <Box
                boxShadow='card'
                overflow='hidden'
                borderRadius='10px'
                _hover={{
                    bg: '#F9F9F9',
                }}
                transitionDuration='normal'
                h='100%'
            >
                <Flex
                    w='100%'
                    justify='center'
                    py='1rem'
                    pos='relative'
                >
                    <Image
                        src={pokemon.image}
                        w='100px'
                        h='100px'
                    />

                    {pokemon.isObtained && (
                        <Tooltip label='Obtained'>
                            <Box
                                lineHeight='0'
                                pos='absolute'
                                top='5px'
                                right='5px'
                            >
                                <Icon
                                    as={MdCatchingPokemon}
                                    lineHeight='0'
                                    fontSize='20px'
                                    color='red.500'
                                />
                            </Box>
                        </Tooltip>
                    )}

                    {myPokemon && (
                        <Tooltip label='Obtained'>
                            <Box
                                lineHeight='0'
                                pos='absolute'
                                top='5px'
                                right='5px'
                            >
                                <Icon
                                    as={MdCatchingPokemon}
                                    lineHeight='0'
                                    fontSize='20px'
                                    color='red.500'
                                />
                            </Box>
                        </Tooltip>
                    )}
                </Flex>
                <Stack
                    p='.75rem'
                    spacing='.75rem'
                >
                    <Text
                        fontSize='sm'
                        fontWeight='semibold'
                        _firstLetter={{
                            textTransform: 'capitalize',
                        }}
                    >
                        {pokemon.name.replaceAll('-', ' ')}
                    </Text>
                </Stack>
            </Box>
        </Link>
    )
}

export default CardPokemon
