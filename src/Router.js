import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Login from './component/Login';
import Landing from './Landing';
import Register from './component/Register';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/App" element={<App />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router