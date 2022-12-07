import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Login from './Login';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router