import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {addActorAC, deleteActorAC, getActorsTC} from "../../redux/actors-reducer";
import styles from "./Actors.module.css";

export  const useActorListLogic = () => {
    const {actors, isLoading} = useSelector(store => store.actorsPage);
    const dispatch = useDispatch();
    const [actorName, setActorName] = useState('');
    useEffect(() => {dispatch(getActorsTC())}, []);

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
    return {
        actorsList, onActorNameChange, onAddActorClick,
        actorName, isLoading
    }
};