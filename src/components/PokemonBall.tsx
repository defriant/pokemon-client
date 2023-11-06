import { Center, Flex, Image, Menu, MenuButton, MenuList, Spinner, Stack, Text } from '@chakra-ui/react'
import { pokemon_ball } from '../assets'
import usePokeball from '../hooks/usePokeball'
import useCountDown from '../hooks/useCountdown'
import { useEffect } from 'react'

function PokemonBall() {
    const { current, max, isLoading, refreshAfter, refetch } = usePokeball()
    const { minutes, seconds, start, isCountdown } = useCountDown(refetch)

    useEffect(() => {
        if (refreshAfter) start(refreshAfter)
    }, [refreshAfter])

    return (
        <Menu>
            <MenuButton>
                <Flex
                    py='.25rem'
                    px='.75rem'
                    borderWidth='1px'
                    borderRadius='full'
                    bg='blackAlpha.50'
                    gap='.5rem'
                    align='center'
                    pos='relative'
                >
                    <Image
                        src={pokemon_ball}
                        w='20px'
                        h='20px'
                    />
                    {isLoading && (
                        <Spinner
                            w='15px'
                            h='15px'
                        />
                    )}

                    {!isLoading && (
                        <Text
                            fontSize='sm'
                            fontWeight='semibold'
                            lineHeight='0'
                        >
                            {current}
                        </Text>
                    )}
                </Flex>
            </MenuButton>
            <MenuList
                boxShadow='lg'
                py='1rem'
            >
                {isLoading && (
                    <Center h='100px'>
                        <Spinner
                            w='40px'
                            h='40px'
                        />
                    </Center>
                )}

                {!isLoading && (
                    <Stack spacing='1rem'>
                        <Stack align='center'>
                            <Image
                                src={pokemon_ball}
                                w='40px'
                                h='40px'
                            />
                            <Text
                                fontSize='sm'
                                fontWeight='semibold'
                            >
                                Pokemon Ball
                            </Text>
                            <Text fontWeight='semibold'>
                                {current}/{max}
                            </Text>
                            <Text
                                fontSize='xs'
                                w='200px'
                            >
                                Pokemon ball is used for capture a pokemon, it will recharge after every 1 minute until reached max amount
                            </Text>
                        </Stack>

                        {isCountdown && (
                            <Stack
                                align='center'
                                spacing='0'
                            >
                                <Text fontSize='lg'>
                                    {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                </Text>
                                <Text fontSize='xs'>Until recharge</Text>
                            </Stack>
                        )}
                    </Stack>
                )}
            </MenuList>
        </Menu>
    )
}

export default PokemonBall
