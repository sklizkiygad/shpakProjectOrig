import React, {useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import InputForm from "../../components/MyInputs/ApiForm/InputForm";

const Register = () => {
    const [regInputsArray,setRegInputsArray]=useState([{id:0,name:'Почта',type:'email'},
                                                                {id:1,name:'Логин',type:'text'},
                                                                {id:2,name:'Пароль',type:'password'}]);
    return (
        <div>
            <Navbar/>
            <h1>
                Страница регистрации
            </h1>
            <InputForm inputsArray={regInputsArray}/>
        </div>
    );
};

export default Register;