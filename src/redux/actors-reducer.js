import {actorsApi} from "../api/apiActors";

const SET_ACTORS = 'actorsList/actors-reducer/SET_USERS';
const DELETE_ACTOR = 'actorsList/actors-reducer/DELETE_ACTOR';
const ADD_ACTOR = 'actorsList/actors-reducer/ADD_ACTOR';
const IS_LOADING = 'actorsList/actors-reducer/IS_LOADING';

let initialState = {
    actors: [],
    isLoading: false
};

export const actorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTORS: {
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
const setActorsToState = (actors) => {
    return {
        type: SET_ACTORS,
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

export const getActorsTC = () => async (dispatch) => {
    dispatch(Loading());
    let response = await actorsApi.getActors();
    dispatch(setActorsToState(response.data.results));
    dispatch(Loading())
};

export default actorsReducer;
