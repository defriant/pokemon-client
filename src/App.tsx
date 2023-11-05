import { useEffect } from 'react'
import useAuth from './hooks/useAuth'
import Routes from './routes/Routes'

function App() {
    const { authenticate } = useAuth()

    useEffect(() => {
        authenticate()
    }, [])

    return <Routes />
}

export default App
