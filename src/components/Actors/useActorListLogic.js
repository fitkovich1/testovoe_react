import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {addActor, deleteActor, getActors} from "../../redux/actors-reducer";

export  const useActorListLogic = () => {
    const {actors, isLoading} = useSelector(store => store.actorsPage);
    const dispatch = useDispatch();
    const [actorName, setActorName] = useState('');
    useEffect(() => {dispatch(getActors())}, []);

    const deleteActorCallback = (index) => {
        dispatch(deleteActor(index))
    };

    const onAddActorClick = () => {
        dispatch(addActor(actorName));
        setActorName('');
    };

    const onActorNameChange = (e) => {setActorName(e.currentTarget.value);};
    return {
        actors, onActorNameChange, onAddActorClick,
        deleteActorCallback,
        actorName, isLoading
    }
};