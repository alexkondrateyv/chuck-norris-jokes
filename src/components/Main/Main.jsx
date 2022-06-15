import React from "react";
import style from "./Main.module.scss"

import Button from "./Button/Button";
import Joke from "./Joke/Joke";

const Main = () => {
    return (
        <div className={style.main}>
            <h1>
                Categories
            </h1>
            <Button/>
            <Joke/>
        </div>
    )
}

export default Main;