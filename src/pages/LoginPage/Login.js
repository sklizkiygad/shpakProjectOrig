import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import InputForm from "../components/MyInputs/InputForm";

const Login = () => {
    const [loginInputsArray,setLoginInputsArray]=useState([{id:0,name:'Логин',type:'text'},{id:1,name:'Пароль',type:'password'}]);
    return (
        <div>

            <h1>
                Страница авторизации
            </h1>

            {loginInputsArray.map(inp=>
                <InputForm key={inp.id} inputsArray={inp}/>
            )}




        </div>
    );
};

export default Login;