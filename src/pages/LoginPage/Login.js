import React, {useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import InputForm from "../../components/MyInputs/ApiForm/InputForm";
import './Login.scss';

const Login = () => {
    const [loginInputsArray,setLoginInputsArray]=useState([{id:0,name:'Логин',type:'text'},{id:1,name:'Пароль',type:'password'}]);
    return (
        <div>
             <Navbar/>
            <h1>
                Страница авторизации
            </h1>
                <InputForm inputsArray={loginInputsArray}/>
        </div>
    );
};

export default Login;