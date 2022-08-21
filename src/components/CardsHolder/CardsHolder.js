import React from 'react';
import './CardsHolder.scss';
import TaskCard from "../TaskCard/TaskCard";

const CardsHolder = ({cardsArray,addCardParent,idOfColumn,nameOfColumn}) => {




    return (
        <div className="cards-holder">
            <h2>{nameOfColumn}</h2>

            {cardsArray.map(item=>
                <TaskCard key={item.id}/>
            )}


            <button onClick={()=>addCardParent(idOfColumn)} className="add-task-button"><span>Добавить задание </span></button>
        </div>
    );
};

export default CardsHolder;