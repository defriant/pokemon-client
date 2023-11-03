import { Box, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

function Pokemons() {
    return (
        <>
            <Box
                as={motion.div}
                initial={{
                    transform: 'translateX(-100vw)',
                }}
                animate={{ transform: 'translateX(0)' }}
                exit={{
                    transform: 'translateX(-100vw)',
                    transition: {
                        duration: 0.3,
                    },
                }}
            >
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, a.</Text>
                {/* <Box h='2000px'></Box> */}
                <Outlet />
            </Box>
        </>
    )
}

export default Pokemons
