import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import './PersCab.scss';
import { useNavigate} from "react-router-dom";
import MyModal from "../../components/MyModal/MyModal";
import {useDispatch, useSelector} from "react-redux";

const PersCab = () => {





    const router=useNavigate();
    const [projectsArray,setProjectsArray]=useState([]);
    const [projectName,setProjectName]=useState('');

    const addNewProject=(e)=>{
        e.preventDefault();
        alert(projectName)
    }



    useEffect(()=>{
        setProjectsArray([
            {id:0,projectName:'Биба'},
            {id:1,projectName:'Боба'},
            {id:2,projectName:'Баба'},
        ]);

    },[])

    const dispatch=useDispatch();

    const openModal=()=>{

        dispatch({type:"OPEN_MODAL"});
    }

    return (
        <div className="pers-cabinet">
            <Navbar/>
            <MyModal >
                <form className="create-project-form">
                <input type="text" placeholder="Название проекта"/>
                <button  type="submit">Создать</button>
                </form>

            </MyModal>
            <h1>Личный кабинет:Bibaboba</h1>

            <h2>Список проектов</h2>
            <ol className="rounded">
                {projectsArray.map(project=>
                    <li key={project.id}>
                        <a onClick={()=>router(`/project/${project.id}`)}>{project.projectName}</a>
                    </li>
                )}

            </ol>
            <button onClick={openModal} className="add-project-button"><span>Создать проект </span></button>
        </div>
    );
};

export default PersCab;