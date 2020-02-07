import React from 'react';
import styles from './Actors.module.css';
import loader from '../../common/images/rolling2.svg';
import {useActorListLogic} from "./useActorListLogic";

const Actors = () => {
    const {
        actors, onActorNameChange, onAddActorClick, deleteActorCallback,
        actorName, isLoading
    } = useActorListLogic();

    const actorsList = actors.map((a, index) => {
        return (
            <div className={styles.actorItem}>
                <div className={styles.name}>
                    {a.name}
                    <button onClick={() => deleteActorCallback(index)}>X</button>
                </div>
                <div>height: {a.height}, mass: {a.mass}, gender: {a.gender}, hair-color: {a.hair_color},
                    eye-color: {a.eye_color}</div>
            </div>
        )
    });

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