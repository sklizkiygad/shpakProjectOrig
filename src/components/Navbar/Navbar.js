import React from 'react';
import logoImg from

const Navbar = () => {
    return (
        <div className="myNavbar">
            <div className="myNavbar__logo">
                <img src="./img/logo.png" alt="1"/>
                    <div className="myNavbar-logo__name">
                        <h4>shpak</h4>
                        <p>unusefull me <br/> for usefull you</p>

                    </div>
            </div>
            <div className="myNavbar__navbuttons">
                <a href="#">Вход</a>
                <a href="#">Регистрация</a>
            </div>
        </div>
    );
};

export default Navbar;