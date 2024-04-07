import React from 'react'
import AuthProvider from './AuthProvider'
import ThemeProvider from './ThemeProvider'
import { Toaster } from 'react-hot-toast'

const ContextProviders = ({ children }) => {
  return (
    <AuthProvider>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        <Toaster /> 
    </AuthProvider>
  )
}

export default ContextProviders