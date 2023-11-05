import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RouteProvider from './routes/RouteProvider.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.ts'
import { QueryClientProvider, QueryClient } from 'react-query'

console.log(theme)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouteProvider>
            <ChakraProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </ChakraProvider>
        </RouteProvider>
    </React.StrictMode>,
)
