import AnimateScreen from '../components/AnimateScreen'
import AnimateScreenHeader from '../components/AnimateScreenHeader'
import AnimateScreenBody from '../components/AnimateScreenBody'
import { Icon, Link, Text } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { PATH } from '../routes/path'
import { FaArrowLeft } from 'react-icons/fa'

function PokemonDetail() {
    return (
        <AnimateScreen
            initial={{ top: '100vh' }}
            animate={{ top: '0' }}
            exit={{ top: '100vh' }}
        >
            <AnimateScreenHeader>
                <Link
                    as={ReactLink}
                    to={PATH.pokemons}
                    opacity='.5'
                    _hover={{
                        opacity: '1',
                    }}
                >
                    <Icon
                        as={FaArrowLeft}
                        fontSize='22px'
                    />
                </Link>
            </AnimateScreenHeader>
            <AnimateScreenBody>
                <Text>Pokemon detail</Text>
            </AnimateScreenBody>
        </AnimateScreen>
    )
}

export default PokemonDetail
