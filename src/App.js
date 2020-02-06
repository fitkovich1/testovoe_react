import React from 'react';
import styles from './App.module.css'
import Header from "./components/Header/Header";
import Actors from "./components/Actors/Actors.tsx";
import {Route} from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
    return (
        <div className={styles.appContainer}>
            <Header/>
            <div>
                <Route render={() => <Main />} path='/main'/>
                <Route render={() => <Actors />} path='/actors'/>
            </div>

        </div>
    );
}

export default App;
