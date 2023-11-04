import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'

function CardPokemon() {
    return (
        <Link
            as={ReactLink}
            to={PATH.pokemonDetail}
        >
            <Box
                boxShadow='card'
                overflow='hidden'
                borderRadius='10px'
            >
                <Flex
                    w='100%'
                    justify='center'
                    py='1rem'
                    bg='#FBFBFB'
                >
                    <Image
                        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
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
                    >
                        Bulbasaur
                    </Text>
                </Stack>
            </Box>
        </Link>
    )
}

export default CardPokemon
