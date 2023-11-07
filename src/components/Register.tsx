import { Box, Button, Icon, Input, InputGroup, InputLeftElement, Stack, Text, UseDisclosureProps, useToast } from '@chakra-ui/react'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { register } from '../api/requests/auth'
import useAuth, { TUser } from '../hooks/useAuth'
import { cookies } from '../api/config'

function Register({ setPage, onClose }: { setPage: Dispatch<SetStateAction<'login' | 'register'>> } & UseDisclosureProps) {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [isValid, setIsValid] = useState<boolean>(false)
    const { setUser } = useAuth()
    const toast = useToast()

    const matchPassword: () => boolean = () => {
        if (password !== confirmPassword) return false
        return true
    }

    useEffect(() => {
        let valid = true

        if (name === '') valid = false
        if (email === '') valid = false
        if (password === '') valid = false
        if (confirmPassword === '') valid = false
        if (matchPassword() === false) valid = false

        setIsValid(valid)
    }, [name, email, password, confirmPassword])

    const sendRegister = useMutation('auth-register', register, {
        onSuccess: ({ user, message, session }: { user: TUser; message: string; session: any }) => {
            onClose!()
            cookies.set('authorization', session.token, {
                maxAge: session.maxAge,
            })
            setUser(user)
            toast.closeAll()
            toast({
                status: 'success',
                description: message,
                isClosable: true,
                duration: 3000,
                position: 'top',
            })
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
            sendRegister.mutate({ name, email, password })
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
                Register
            </Text>
            <Stack
                as='form'
                onSubmit={handleSubmit}
                spacing='2rem'
            >
                <Stack spacing='1rem'>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={AiOutlineUser} />
                        </InputLeftElement>
                        <Input
                            type='text'
                            placeholder='Name'
                            fontSize='sm'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </InputGroup>
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
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={AiOutlineLock} />
                        </InputLeftElement>
                        <Input
                            type='password'
                            placeholder='Confirm password'
                            fontSize='sm'
                            value={confirmPassword}
                            isInvalid={confirmPassword !== '' && !matchPassword()}
                            onChange={e => setConfirmPassword(e.target.value)}
                            onBlur={matchPassword}
                        />
                    </InputGroup>
                </Stack>
                <Button
                    type='submit'
                    colorScheme='blue'
                    isDisabled={!isValid}
                    isLoading={sendRegister.isLoading}
                >
                    Register
                </Button>
                <Text
                    fontSize='sm'
                    align='center'
                >
                    Already have an account?{' '}
                    <Box
                        as='span'
                        color='blue.500'
                        cursor='pointer'
                        onClick={() => setPage('login')}
                    >
                        Sign in now
                    </Box>
                </Text>
            </Stack>
        </>
    )
}

export default Register
