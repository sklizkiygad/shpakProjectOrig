import React from 'react';
import {createStore} from "redux";



const defaultState={
    openModal:false
}

    const reducer=(state=defaultState,action)=>{

        switch (action.type) {
            case "OPEN_MODAL":

                return {...state,openModal: !state.openModal}
            default:
                return state
        }

    }
    export const store = createStore(reducer);

