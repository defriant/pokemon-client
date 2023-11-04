import { Flex, Image, Text } from '@chakra-ui/react'
import { pokemon_ball } from '../assets'

function PokemonBall() {
    return (
        <Flex
            py='.25rem'
            px='.5rem'
            borderWidth='1px'
            borderRadius='full'
            bg='blackAlpha.50'
            gap='.5rem'
            align='center'
        >
            <Image
                src={pokemon_ball}
                w='20px'
                h='20px'
            />
            <Text
                fontSize='xs'
                fontWeight='semibold'
                lineHeight='0'
            >
                3 / 10
            </Text>
        </Flex>
    )
}

export default PokemonBall
