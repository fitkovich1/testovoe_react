import React, {useEffect, useState} from 'react';
import styles from './Actors.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addActorAC, deleteActorAC, getUsersTC} from "../../redux/actors-reducer";
import loader from '../../common/images/rolling2.svg';

const Actors = () => {
    const {actors, isLoading} = useSelector(store => store.actorsPage);
    const dispatch = useDispatch();
    const [actorName, setActorName] = useState('');
    useEffect(() => {dispatch(getUsersTC())}, []);

    const deleteActor = (index) => {
        dispatch(deleteActorAC(index))
    };

    const onAddActorClick = () => {
        dispatch(addActorAC(actorName));
        setActorName('');
    };

   const onActorNameChange = (e) => {
       setActorName(e.currentTarget.value);

   };
    const actorsList = actors.map((a, index) => {
        return (
            <div className={styles.actorItem}>
                <div className={styles.name}>
                    {a.name}
                    <button onClick={() => deleteActor(index)}>X</button>
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