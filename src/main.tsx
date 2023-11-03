import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RouteProvider from './routes/RouteProvider.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.ts'

console.log(theme)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouteProvider>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </RouteProvider>
    </React.StrictMode>,
)
