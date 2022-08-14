import React from 'react';

import './styles/App.scss';
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegPage/Register";
import AppRouter from "./components/AppRouter/AppRouter";
import {BrowserRouter} from 'react-router-dom';




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
