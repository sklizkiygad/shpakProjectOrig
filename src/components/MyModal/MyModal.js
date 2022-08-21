import React, {useEffect, useState} from 'react';
import './MyModal.scss';
import {useDispatch, useSelector} from "react-redux";

const MyModal = ({children}) => {

    const dispatch=useDispatch();
    const isOpen=useSelector(state => state.openModal);
    console.log(isOpen);

    const [visible,setVisible]=useState(false);

    useEffect(()=>{
        if(isOpen){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    })


    const closeModal=()=>{
        dispatch({type:"OPEN_MODAL"});
    }


    return (
        <div onClick={closeModal} className={visible?  'myModal active': 'myModal'}>
            <div className='myModalContent' onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>

        </div>
    );
};

export default MyModal;