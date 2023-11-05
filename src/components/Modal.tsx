import { Box, Center, Container, Fade } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ModalProps = {
    id: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    height?: 'full' | 'auto'
}

function Modal({ id, children, isOpen, onClose, height = 'auto' }: ModalProps) {
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
                    backdropFilter='blur(3px)'
                    onClick={(e: any) => !e.target.closest(`.${id}`) && onClose!()}
                    zIndex='modal'
                >
                    <Container
                        h='100vh'
                        bg='rgba(0, 0, 0, .5)'
                    >
                        <Center
                            w='100%'
                            h='100%'
                            pb='25vh'
                        >
                            <Box
                                className={id}
                                w='max-content'
                                maxW='100%'
                                bg='white'
                                borderRadius='12px'
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
