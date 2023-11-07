import { Box, Center, Container, Fade } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ModalProps = {
    id: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    height?: 'full' | 'auto'
    closeOnOverlayClick?: boolean
    darker?: boolean
    centered?: boolean
}

function Modal({ id, children, isOpen, onClose, height = 'auto', closeOnOverlayClick = true, darker, centered }: ModalProps) {
    return (
        <>
            {height !== 'full' && (
                <Box
                    as={Fade}
                    in={isOpen}
                    unmountOnExit={true}
                    pos='fixed'
                    top='0'
                    left='0'
                    right='0'
                    bottom='0'
                    w='body-width'
                    backdropFilter={darker ? 'blur(10px)' : 'blur(3px)'}
                    onClick={(e: any) => !e.target.closest(`.${id}`) && closeOnOverlayClick && onClose && onClose()}
                    zIndex='modal'
                >
                    <Container
                        h='100vh'
                        bg={darker ? 'rgba(0, 0, 0, .7)' : 'rgba(0, 0, 0, .5)'}
                    >
                        <Center
                            w='100%'
                            h='100%'
                            pb={centered ? '0' : '25vh'}
                        >
                            <Box
                                className={id}
                                w='max-content'
                                maxW='100%'
                            >
                                {children}
                            </Box>
                        </Center>
                    </Container>
                </Box>
            )}
        </>
    )
}

export default Modal
