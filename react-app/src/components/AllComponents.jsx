import React from 'react'
import { useLocation, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation"

import Home from './Home'
import Product from './Product'
import Catagory from './Catagory'
import About from "./About"
import NoPage from "./NoPage"


function AllComponents() {
    const location = useLocation()
    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/catagory' element={<Catagory />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NoPage />} />
                    <Route />
                </Route>
            </Routes>
        </>
    )
}
export default AllComponents();