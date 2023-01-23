import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {GithubProvider } from './context/context'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GithubProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </GithubProvider>
  </React.StrictMode>,
)
