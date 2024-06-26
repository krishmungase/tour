import React from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

import { Route, Outlet, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header'

const RootLayout = () => {
    return <>
        <Header />
        <Outlet />
    </>
}

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route path="" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
    )
)
export default Router
