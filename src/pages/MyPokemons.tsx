import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

function MyPokemons() {
    return (
        <Box
            as={motion.div}
            initial={{
                transform: 'translateX(100%)',
            }}
            animate={{
                transform: 'translateX(0)',
            }}
            exit={{
                transform: 'translateX(100%)',
            }}
        >
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem tempore culpa aliquam quo voluptatum, expedita necessitatibus error
                ut quod?
            </Text>
            <Outlet />
        </Box>
    )
}

export default MyPokemons
