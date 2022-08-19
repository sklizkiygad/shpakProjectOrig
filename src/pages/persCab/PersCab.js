import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import './PersCab.scss';
import {Link, useLocation, useNavigate} from "react-router-dom";

const PersCab = () => {

    const router=useNavigate();

    const [projectsArray,setProjectsArray]=useState([]);

    useEffect(()=>{

        setProjectsArray([
            {id:0,projectName:'Биба'},
            {id:1,projectName:'Боба'},
            {id:2,projectName:'Баба'},
        ]);

    },[])

    return (
        <div>
            <Navbar/>
            <h1>Личный кабинет:Bibaboba</h1>

            <h2>Список проектов</h2>
            <ol className="rounded">
                {projectsArray.map(project=>
                    <li key={project.id}>
                        <a onClick={()=>router(`/project/${project.id}`)}>{project.projectName}</a>
                    </li>
                )}

            </ol>
        </div>
    );
};

export default PersCab;