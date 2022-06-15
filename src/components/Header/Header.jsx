import React from "react";
import style from "./Header.module.scss"

const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.logo}>
                <img src="/img/logo.png" alt="logo"/>
                <h1 className={style.text}>Chuck Norris</h1>
            </div>
        </div>
    )
}

export default Header;