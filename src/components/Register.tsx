import { Box, Button, Icon, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { Dispatch, SetStateAction, useState } from 'react'

function Register({ setPage }: { setPage: Dispatch<SetStateAction<'login' | 'register'>> }) {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

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
            <Stack spacing='2rem'>
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
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </InputGroup>
                </Stack>
                <Button colorScheme='blue'>Register</Button>
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
