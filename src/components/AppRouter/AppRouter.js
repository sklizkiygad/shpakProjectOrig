import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Register from "../../pages/RegPage/Register";
import Login from "../../pages/LoginPage/Login";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>


            </Routes>
    );
};

export default AppRouter;