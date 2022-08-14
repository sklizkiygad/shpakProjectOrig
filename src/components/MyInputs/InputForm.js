import React from 'react';
import './MyInputs.scss';

const InputForm = ({inputsArray},requestAddress) => {
    function sendInfo(ev){
        ev.preventDefault();
        alert('говнарь');
    }
    return (
        <form className="inputs-form">
            {inputsArray.map(inp=>

                <div key={inp.id}>

                <label  htmlFor={inp.id+inp.type}>{inp.name}</label>
                <input id={inp.id+inp.type} type={inp.type}/>

                </div>
            )}
        <button onClick={sendInfo} type="submit">Отправить</button>
        </form>
    );
};

export default InputForm;