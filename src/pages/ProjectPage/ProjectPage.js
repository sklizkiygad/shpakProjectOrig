import React, {useEffect, useState} from 'react';
import './ProjectPage.scss';
import Navbar from "../../components/Navbar/Navbar";
import CardsHolder from "../../components/CardsHolder/CardsHolder";
import MyModal from "../../components/MyModal/MyModal";
import {useDispatch} from "react-redux";

const ProjectPage = () => {
    const dispatch=useDispatch();

    const [tasksArray,setTasksArray]=useState([]);
    const [newColumnName,setNewColumnName]=useState('');

    useEffect(()=>{
        setTasksArray([
            {id:0,head:'Важные задания',tasks:[{id:0}]},
            {id:1,head:'Очкошные задания',tasks:[{id:0}]},
            {id:2,head:'Ежжи задания',tasks:[{id:0}]},
        ]);

    },[])

    const addColumn=(e)=>{
        e.preventDefault();
        if(newColumnName.trim() !== ''){
            setTasksArray([...tasksArray,{id:tasksArray.length,head:newColumnName,tasks:[]}]);
        }

    }

    const addCards=(e)=>{

        let copyArray=Object.assign([],tasksArray);
        copyArray[e].tasks.push({id:copyArray[e].tasks.length});
        setTasksArray(copyArray);

    }

    return (
        <div>
            <Navbar/>
            <div className="main-holder">
                <MyModal>
                    <form className="create-project-form" >

                    <input type="text" placeholder="Название колонки" value={newColumnName} onChange={(e)=>setNewColumnName(e.target.value)}/>
                    <button onClick={addColumn} type="submit">Добавить</button>
                    </form>
                </MyModal>


                {tasksArray.map(taskItem=>
                    <CardsHolder key={taskItem.id} idOfColumn={taskItem.id} addCardParent={addCards} cardsArray={taskItem.tasks} nameOfColumn={taskItem.head} />
                )}

                
                <button onClick={()=>dispatch({type:"OPEN_MODAL"})} className="add-column-button"><span>Добавить колонку </span></button>
            </div>
        </div>
    );
};

export default ProjectPage;