import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { TPokemonList } from '../pages/Pokemons'

type CardPokemonProps = {
    pokemon: TPokemonList
}

function CardPokemon({ pokemon }: CardPokemonProps) {
    return (
        <Link
            as={ReactLink}
            to={PATH.pokemonDetail}
            _hover={{
                textDecor: 'none',
            }}
        >
            <Box
                boxShadow='card'
                overflow='hidden'
                borderRadius='10px'
                _hover={{
                    bg: '#F9F9F9',
                }}
                transitionDuration='normal'
            >
                <Flex
                    w='100%'
                    justify='center'
                    py='1rem'
                >
                    <Image
                        src={pokemon.image}
                        w='100px'
                        h='100px'
                    />
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
                        {pokemon.name}
                    </Text>
                </Stack>
            </Box>
        </Link>
    )
}

export default CardPokemon