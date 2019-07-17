import React from 'react';
import style from './Header.module.css';
import logo from './page-1.png';

const Header = () => {
    return (
        <div className={style.main}>
            <img src={logo} alt="logo" className={style.logo}/>
            <h3 className={style.logo_text}>A Better Experience</h3>
            <h2 className={style.title}>Frond-End Developer<span className={style.yellow}>.</span></h2>
            <p className={style.text}>Adyax’s core values take top priority: we care for our client, and we care for our people. Staff and clients work in partnership with consistent,  transparent communication.
</p>
        </div>
    );
};

export default Header;