import React from 'react'
import { BrowserRouter } from "react-router-dom"
import LoginPage from '../screens/auth/LoginPage'

const AppLayout = () => {
    return (
        <BrowserRouter>
            <LoginPage />
        </BrowserRouter>
    )
}

export default AppLayout