import { Box, Icon, UseDisclosureProps } from '@chakra-ui/react'
import { useLayoutEffect } from 'react'
import Modal from './Modal'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

function UserAuth({ isOpen, onClose }: UseDisclosureProps) {
    const [page, setPage] = useState<'login' | 'register'>('login')

    useLayoutEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            setPage('login')
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <Modal
            id='_user-auth_'
            isOpen={isOpen}
            onClose={onClose}
            closeOnOverlayClick={false}
        >
            <Box
                p='1.5rem'
                pb='3rem'
                w='500px'
                pos='relative'
            >
                <Icon
                    as={FaTimes}
                    pos='absolute'
                    top='15px'
                    right='15px'
                    fontSize='lg'
                    cursor='pointer'
                    opacity='.5'
                    _hover={{
                        opacity: 1,
                    }}
                    transitionDuration='normal'
                    onClick={onClose}
                />

                {page === 'login' && (
                    <Login
                        setPage={setPage}
                        onClose={onClose}
                    />
                )}
                {page === 'register' && (
                    <Register
                        setPage={setPage}
                        onClose={onClose}
                    />
                )}
            </Box>
        </Modal>
    )
}

export default UserAuth
