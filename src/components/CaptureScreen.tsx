import { FaCheck, FaTimes } from 'react-icons/fa'
import { hourglass_gif } from '../assets'
import Modal from './Modal'
import { Box, Button, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type CaptureScreenProps = {
    pokemon: any
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    isCapturing: boolean
    setIsCapturing: Dispatch<SetStateAction<boolean>>
    isSuccess: boolean
    setIsSuccess: Dispatch<SetStateAction<boolean>>
    isFailed: boolean
    setIsFailed: Dispatch<SetStateAction<boolean>>
}

function CaptureScreen({
    pokemon,
    isOpen,
    setIsOpen,
    isCapturing,
    setIsCapturing,
    isSuccess,
    setIsSuccess,
    isFailed,
    setIsFailed,
}: CaptureScreenProps) {
    const [zoom, setZoom] = useState(false)

    useEffect(() => {
        if (isSuccess) {
            setZoom(true)
            setTimeout(() => {
                setZoom(false)
            }, 600)
        }
    }, [isSuccess])

    return (
        <Modal
            id='_capturing_'
            isOpen={isOpen}
            darker={true}
        >
            <Stack
                align='center'
                spacing='1.5rem'
            >
                <Box
                    w='200px'
                    h='200px'
                    overflow='visible'
                >
                    <Image
                        src={pokemon?.sprites?.other?.dream_world?.front_default}
                        w='100%'
                        h='100%'
                        filter={isCapturing ? 'brightness(.2)' : isSuccess ? 'brightness(1)' : isFailed ? 'brightness(0)' : 'brightness(1)'}
                        transitionDuration='normal'
                        transform={zoom ? 'scale(1.2)' : 'scale(1)'}
                    />
                </Box>

                {isCapturing && (
                    <Stack
                        align='center'
                        h='120px'
                    >
                        <Image
                            src={hourglass_gif}
                            w='70px'
                            filter='brightness(1) invert(1)'
                        />
                        <Flex
                            align='center'
                            justify='center'
                            columnGap='.4rem'
                            color='white'
                            flexWrap='wrap'
                        >
                            <Text>Capturing</Text>
                            <Text
                                _firstLetter={{
                                    textTransform: 'capitalize',
                                }}
                            >
                                {pokemon?.name?.replaceAll('-', ' ')}
                            </Text>
                        </Flex>
                    </Stack>
                )}

                {isSuccess && (
                    <Stack
                        spacing='1.5rem'
                        h='120px'
                    >
                        <Stack
                            align='center'
                            justify='center'
                        >
                            <Flex
                                gap='1rem'
                                align='center'
                                color='green.300'
                            >
                                <Icon
                                    as={FaCheck}
                                    fontSize='24px'
                                />
                                <Text
                                    fontWeight='bold'
                                    fontSize='xl'
                                >
                                    Congratulation
                                </Text>
                            </Flex>
                            <Flex
                                align='center'
                                justify='center'
                                columnGap='.4rem'
                                color='white'
                                flexWrap='wrap'
                            >
                                <Text
                                    _firstLetter={{
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {pokemon?.name?.replaceAll('-', ' ')}
                                </Text>
                                <Text>has been captured</Text>
                            </Flex>
                        </Stack>
                        <Button
                            size='sm'
                            rounded='full'
                            colorScheme='blue'
                        >
                            Continue
                        </Button>
                    </Stack>
                )}

                {isFailed && (
                    <Stack
                        spacing='1.5rem'
                        h='120px'
                    >
                        <Stack
                            align='center'
                            justify='center'
                        >
                            <Flex
                                gap='1rem'
                                align='center'
                                color='red.300'
                            >
                                <Icon
                                    as={FaTimes}
                                    fontSize='24px'
                                />
                                <Text
                                    fontWeight='bold'
                                    fontSize='xl'
                                >
                                    Failed
                                </Text>
                            </Flex>
                            <Flex
                                align='center'
                                justify='center'
                                columnGap='.4rem'
                                color='white'
                                flexWrap='wrap'
                            >
                                <Text
                                    _firstLetter={{
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {pokemon?.name?.replaceAll('-', ' ')}
                                </Text>
                                <Text>has fleed</Text>
                            </Flex>
                        </Stack>
                        <Button
                            size='sm'
                            rounded='full'
                            onClick={() => {
                                setIsOpen(false)
                                setIsCapturing(false)
                                setIsSuccess(false)
                                setIsFailed(false)
                            }}
                        >
                            Close
                        </Button>
                    </Stack>
                )}
            </Stack>
        </Modal>
    )
}

export default CaptureScreen
