import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/Home'

import Login from "./components/Login";

function PrivateRoute({isAuthenticated, children}) {
    return (
        isAuthenticated ? children : <Navigate to={{
                pathname: "/login/",
            }}
        />
      );
}

function Urls(props) {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login/" element={<Login {...props} />}/>
                    <Route exact path="/" element={
                        <PrivateRoute isAuthenticated={props.isAuthenticated}>
                            <Home {...props}/>
                        </PrivateRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Urls;