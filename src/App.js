import React, {useState} from 'react';

import './styles/App.scss';
import AppRouter from "./components/AppRouter/AppRouter";
import {BrowserRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";






function App() {


  return (
    <div className="App">


        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>


    </div>
  );
}

export default App;
