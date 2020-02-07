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
const getActorsSuccess = (actors) => {
    return {
        type: SET_ACTORS,
        actors
    }
};

export const deleteActor = (id) => {
    return {
        type: DELETE_ACTOR,
        id
    }
};
export const addActor = (name) => {
    return {
        type: ADD_ACTOR,
        name
    }
};
const toggleLoading = () => {
    return {
        type: IS_LOADING
    }
};

export const getActors = () => async (dispatch) => {
    dispatch(toggleLoading());
    let response = await actorsApi.getActors();
    dispatch(getActorsSuccess(response.data.results));
    dispatch(toggleLoading())
};

export default actorsReducer;
