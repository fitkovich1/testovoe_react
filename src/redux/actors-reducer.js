import {actorsApi} from "../api/apiActors";

const SET_USERS = 'SET_USERS';
const DELETE_ACTOR = 'DELETE_ACTOR';
const ADD_ACTOR = 'ADD_ACTOR';
const IS_LOADING = 'IS_LOADING';

let initialState = {
    actors: [],
    isLoading: false
};

export const actorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                actors: action.actors
            }
        }
        case DELETE_ACTOR: {
            return {
                ...state,
                actors: state.actors.filter((actor, index) => action.id !== index)
            }
        }
        case ADD_ACTOR: {
            return {
                ...state,
                actors: [
                    {
                        name: action.name, height: 'n/a',
                        mass: 'n/a', gender: 'n/a',
                        hair_color: 'n/a', eye_color: 'n/a'
                    }, ...state.actors]
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        }
        default:
            return state;
    }
};
const setUsersToState = (actors) => {
    return {
        type: SET_USERS,
        actors
    }
};

export const deleteActorAC = (id) => {
    return {
        type: DELETE_ACTOR,
        id
    }
};
export const addActorAC = (name) => {
    return {
        type: ADD_ACTOR,
        name
    }
};
const Loading = () => {
    return {
        type: IS_LOADING
    }
};

export const getUsersTC = () => async (dispatch) => {
    dispatch(Loading());
    let response = await actorsApi.getActors();
    dispatch(setUsersToState(response.data.results));
    dispatch(Loading())
};

export default actorsReducer;
