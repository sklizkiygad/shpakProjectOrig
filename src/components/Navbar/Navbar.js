import React, {useEffect, useState} from 'react';
import logoImg from '../../img/logo.png';
import upImg from '../../img/up.svg';
import downImg from '../../img/down.svg';
import leftImg from '../../img/left.svg';
import rightImg from '../../img/right.svg';
import './Navbar.scss';
import {
    Link,
} from 'react-router-dom';


const Navbar = () => {

    const [isOpen,setIsOpen]=useState(false);
    const [actualStyle,setActualStyle]=useState('loc-up');
    const [isBurger,setIsBurger]=useState(false);


   function changeLocation(locate){
     localStorage.setItem('navLocate',locate);
       switch(locate){
           case 0:
               setActualStyle('loc-up');
               break;
           case 1:
               setActualStyle('loc-bottom');
               break;
           case 2:
               setActualStyle('loc-right');
               break;
           case 3:
               setActualStyle('loc-left');

               break;
           default:
               setActualStyle('loc-up');
               break;

       }

   }
    useEffect(()=>{
        changeLocation(parseInt((localStorage.getItem('navLocate'))));
        burgerMenu();
    },[])

    function openLocation(){
        setIsOpen(!isOpen);
    }
    function burgerMenu() {
        if(window.screen.width<=670){
            setIsBurger(!isBurger);
        }
    }

    return (
        <div className={"myNavbar "+actualStyle} >
            <div className="myNavbar__logo">
                <img onClick={burgerMenu} src={logoImg} alt="1"/>
                    <div className="myNavbar-logo__name">
                        <h4>shpak</h4>
                        <p>unusefull me <br/> for usefull you</p>

                    </div>
            </div>

            <div className="myNavbar__navbuttons" style={{flexDirection: (actualStyle==='loc-left'||actualStyle==='loc-right') ? 'column':'row' , display: !isBurger? 'flex':'none'}}>
                <div className="myNavbar__location">
                    <a onClick={()=>openLocation()}>Расположение
                        <svg  style={{'display': !isOpen?'block':'none'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>

                        <svg style={{'display': isOpen?'block':'none'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path
                                d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>
                    </a>
                    <ul style={{'display': isOpen?'block':'none', bottom: actualStyle==='loc-bottom' ? '55px':'auto' }}>
                        <li onClick={()=>changeLocation(0)}>
                            Сверху <img src={upImg} alt="up"/>
                        </li>
                        <li onClick={()=>changeLocation(1)}>
                            Снизу <img src={downImg} alt="up"/>

                        </li>
                        <li onClick={()=>changeLocation(2)}>
                            Справа <img src={rightImg} alt="up"/>
                        </li>
                        <li onClick={()=>changeLocation(3)}>
                            Слева <img src={leftImg} alt="up"/>
                        </li>
                    </ul>
                </div>


                {localStorage.getItem('isAuth')==='true'? (
                    <div style={{display:(actualStyle==='loc-bottom'||actualStyle==='loc-up')?'flex':'block'}}>
                    <Link to="/login">Вход</Link>
                    <Link to="/register">Регистрация</Link>
                    </div>):
                    ( <a>Выйти</a>)}

            </div>
        </div>

    );
};

export default Navbar;