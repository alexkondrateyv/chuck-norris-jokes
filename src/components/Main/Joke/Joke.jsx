import React, {useEffect, useState} from "react";
import style from "./Joke.module.scss"

import {useDispatch, useSelector} from "react-redux";

import {Get} from "../../../services/response";

const Joke = () => {
    const dispatch = useDispatch();
    let res = useSelector(state => state.joke);

    const [joke, setJoke] = useState(res)
    useEffect(() => {
        Get("https://api.chucknorris.io/jokes/random")
            .then(res => dispatch({type: 'UPDATE_JOKE', data: res.data}))
    }, [])
    useEffect(() => {
        setJoke(res)
    }, [res])

    return (
        <div className={style.container}>
            <img src="/img/chuck-norris.png" alt="chuck"/>
            <div className={style.answer}>
                <p>{joke.value}</p>
            </div>
        </div>
    )
}

export default Joke;