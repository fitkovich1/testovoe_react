import React from 'react';
import styles from './App.module.css'
import Header from "./components/Header/Header";
import Actors from "./components/Actors/Actors.tsx";
import {Route} from "react-router-dom";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <div className={styles.appContainer}>
            <Header/>
            <Route exact render={() => <Main/>} path='/'/>
            <Route exact render={() => <Actors/>} path='/actors'/>
        </div>
    );
};
export default App;
