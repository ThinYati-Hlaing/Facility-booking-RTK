import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './screens/auth/LoginPage';
import HomePage from './screens/home/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App