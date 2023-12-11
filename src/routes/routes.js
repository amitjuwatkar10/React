import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";

//Components
import Profile from '../components/profile/profile'; 
import Home from '../components/home/home';
import Apps from '../components/apps/app';
import Login from '../components/login/login';

// Shared
import Header from '../shared-components/header/header';
import Footer from '../shared-components/footer/footer';

//Configs
import PageTitles  from '../configs/titles'

const AppRoute =  () => {
    return (
        <BrowserRouter>
            <PageTitles/> 
            <Header/>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/apps" element={<Apps />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoute;