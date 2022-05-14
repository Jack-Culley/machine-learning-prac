import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/Home';
import PasswordUpdate from './components/PasswordUpdate';
import Login from "./components/Login";


//isAuthenticated is false when we press change password but true when we go to login
function PrivateRoute1({isAuthenticated, children}) {
    return (
        isAuthenticated ? children : <Navigate to={{
                pathname: "/login/",
            }}
        />
      );
}

function PrivateRoute2({isAuthenticated, children}) {
    return (
        !isAuthenticated ? children : <Navigate to={{
                pathname: "/",
            }}
        />
      );
}

function Urls(props) {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login/" element={
                        <PrivateRoute2 isAuthenticated={props.isAuthenticated}>
                            <Login {...props} />
                        </PrivateRoute2>
                    }/>
                    <Route exact path="/" element={
                        <PrivateRoute1 isAuthenticated={props.isAuthenticated}>
                            <Home {...props}/>
                        </PrivateRoute1>
                    }/>
                    <Route exact path="/update_password/" element={
                        <PrivateRoute2 isAuthenticated={props.isAuthenticated}>
                            <PasswordUpdate {...props}/>
                        </PrivateRoute2>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Urls;