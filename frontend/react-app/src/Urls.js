import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'

import Login from "./components/Login";

function Urls(props) {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login/" element={<Login {...props} />}/>
                    <Route exact path="/" element={<Home {...props}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Urls;