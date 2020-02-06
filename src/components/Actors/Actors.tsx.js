import React from 'react';
import styles from './Actors.module.css';
import loader from '../../common/images/rolling2.svg';
import {useActorListLogic} from "./useActorListLogic";

const Actors = () => {
    const {
        actorsList, onActorNameChange, onAddActorClick,
        actorName, isLoading
    } = useActorListLogic();

    return (
        <div className={styles.actorsContainer}>
            <div className={styles.addName}>
                <input type='text' placeholder='Name and surname' value={actorName} onChange={onActorNameChange}/>
                <button className={styles.addNameBtn} onClick={onAddActorClick} disabled={!actorName}>+</button>
            </div>
            {isLoading ? <img src={loader} alt="Loading"/> : <div>{actorsList}</div>}
        </div>
    );
};

export default Actors;