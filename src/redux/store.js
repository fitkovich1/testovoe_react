import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import actorsReducer from "./actors-reducer";


let reducers = combineReducers({actorsPage: actorsReducer});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default  store;