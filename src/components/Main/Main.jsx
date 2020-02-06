import React from 'react';
import styles from './Main.module.css';
import {NavLink} from "react-router-dom";



const Main = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>Welcome!</h1>
            <h3>Actors list: <NavLink to='/actors'>Actors</NavLink></h3>
        </div>
    )
};

export default Main;
