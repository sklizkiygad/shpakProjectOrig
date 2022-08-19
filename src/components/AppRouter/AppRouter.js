import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Register from "../../pages/RegPage/Register";
import Login from "../../pages/LoginPage/Login";
import PersCab from "../../pages/persCab/PersCab";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";


const AppRouter = () => {
    return (
        <Routes>

            {localStorage.getItem('isAuth')==='true' ?
                (<Route path="/" element={<PersCab/>}/>):
                (<Route path="/" element={<Login/>}/>)}
            <Route path="/project/:id" element={<ProjectPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
};

export default AppRouter;