import React, {useEffect, useState} from "react";
import style from "./Button.module.scss"

import {useDispatch, useSelector} from "react-redux";
import {Get} from "../../../services/response"

const Button = () => {
    const dispatch = useDispatch();
    let res = useSelector(state => state.categories);

    const [btns, setBtns] = useState(res)
    useEffect(() => {
        Get("https://api.chucknorris.io/jokes/categories")
            .then(res => dispatch({type: 'UPDATE_CATEGORIES', data: res.data}))
    }, [])
    useEffect(() => {
        setBtns(res)
    }, [res])

    function requestJoke(url) {
        Get(url)
            .then(res => dispatch({type: 'UPDATE_JOKE', data: res.data}))
            .catch(res => console.log(res))
    }

    const buttons = btns.map(elem => {
            return (
                <button key={elem} onClick={() => {
                    if (elem === 'random') {
                        requestJoke(`https://api.chucknorris.io/jokes/random`)
                    } else {
                        requestJoke(`https://api.chucknorris.io/jokes/random?category=${elem}`)
                    }
                }}>{elem}</button>
            )
        }
    )

    return (
        <div className={style.btns}>
            {buttons}
        </div>
    )
}

export default Button;