import React, {useEffect, useState} from 'react';
import './ProjectPage.scss';
import Navbar from "../../components/Navbar/Navbar";

import CardsHolder from "../../components/CardsHolder/CardsHolder";

const ProjectPage = () => {

    const [tasksArray,setTasksArray]=useState([]);

    useEffect(()=>{
        setTasksArray([
            {id:0,head:'Важные задания',tasks:[{id:0}]},
            {id:1,head:'Очкошные задания',tasks:[{id:1}]},
            {id:2,head:'Ежжи задания',tasks:[{id:2}]},
        ]);
    },[])



    return (
        <div>
            <Navbar/>
            <div className="main-holder">

                {tasksArray.map(taskItem=>
                    <CardsHolder key={taskItem.id} cardsArray={taskItem.tasks} />
                )}



                <button className="add-column-button"><span>Добавить колонку </span></button>
            </div>
        </div>
    );
};

export default ProjectPage;