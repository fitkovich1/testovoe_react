import React from 'react';
import styles from './Main.module.css';
import {NavLink} from "react-router-dom";



const Main = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>Добро пожаловать на главную страницу!!!</h1>
            <h3>Список актёров: <NavLink to='/actors'>Actors</NavLink></h3>
        </div>
    )
};

export default Main;
