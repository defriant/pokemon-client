import { Box, Button, Icon, Input, InputGroup, InputLeftElement, Stack, Text, useToast } from '@chakra-ui/react'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { login } from '../api/requests/auth'
import useAuth from '../hooks/useAuth'

function Login({ setPage }: { setPage: Dispatch<SetStateAction<'login' | 'register'>> }) {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isValid, setIsValid] = useState<boolean>(false)
    const { setUser } = useAuth()
    const toast = useToast()

    useEffect(() => {
        let valid = true

        if (email.replaceAll(' ', '').length === 0) valid = false
        if (password.replaceAll(' ', '').length === 0) valid = false

        setIsValid(valid)
    }, [email, password])

    const sendLogin = useMutation('auth-login', login, {
        onSuccess: res => {
            setUser(res)
        },
        onError: (err: any) => {
            toast.closeAll()
            toast({
                status: 'warning',
                description: err.data.message,
                isClosable: true,
                duration: 3000,
                position: 'top',
            })
        },
    })

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (isValid) {
            sendLogin.mutate({ email, password })
        }
    }

    return (
        <>
            <Text
                fontWeight='semibold'
                fontSize='xl'
                align='center'
                mb='1.5rem'
            >
                Sign in
            </Text>
            <Stack
                as='form'
                onSubmit={handleSubmit}
                spacing='2rem'
            >
                <Stack spacing='1rem'>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={AiOutlineMail} />
                        </InputLeftElement>
                        <Input
                            type='email'
                            placeholder='Email'
                            fontSize='sm'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={AiOutlineLock} />
                        </InputLeftElement>
                        <Input
                            type='password'
                            placeholder='Password'
                            fontSize='sm'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </InputGroup>
                </Stack>
                <Button
                    type='submit'
                    colorScheme='blue'
                    isDisabled={!isValid}
                    isLoading={sendLogin.isLoading}
                >
                    Sign in
                </Button>
                <Text
                    fontSize='sm'
                    align='center'
                >
                    Don't have an account?{' '}
                    <Box
                        as='span'
                        color='blue.500'
                        cursor='pointer'
                        onClick={() => setPage('register')}
                    >
                        Register here
                    </Box>
                </Text>
            </Stack>
        </>
    )
}

export default Login
