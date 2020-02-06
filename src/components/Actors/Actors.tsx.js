import React, {useState} from 'react';
import styles from './Actors.module.css';
import {actorsApi} from "../../api/apiActors";

const Actors = () => {
    const [actors, setActors] = useState([]);
    const [isBtnClick, setBtn] = useState(false);
    const getUsers = async () => {
        let response = await actorsApi.getActors();
        setActors(response.data.results);
        setBtn(true);
    };

    const actorsList = actors.map((a) => {
        return <div>
            <div className={styles.name}>{a.name}</div>
            <div>height: {a.height}, mass: {a.mass}, gender: {a.gender}, hair-color: {a.hair_color},
                eye-color: {a.eye_color}</div>
        </div>
    });

    return (
        <div className={styles.actorsContainer}>
            {isBtnClick ? <div>{actorsList}</div> : <button onClick={getUsers}>StarWars actors</button>}
        </div>
    );
};

export default Actors;