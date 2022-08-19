import React from 'react';
import './CardsHolder.scss';
import TaskCard from "../TaskCard/TaskCard";

const CardsHolder = ({cardsArray}) => {
    return (
        <div className="cards-holder">
            <h2>Важные задания</h2>

            {cardsArray.map(item=>
                <TaskCard key={item.id}/>
            )}


            <button className="add-task-button"><span>Добавить задание </span></button>
        </div>
    );
};

export default CardsHolder;