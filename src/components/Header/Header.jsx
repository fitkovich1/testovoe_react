import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to='/main'>Main</NavLink>
            <NavLink to='/actors'>Actors</NavLink>
        </div>
    )
};
export default Header;