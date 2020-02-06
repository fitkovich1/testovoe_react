import {actorsApi} from "../api/apiActors";

const SET_USERS = 'SET_USERS';

let initialState = {

};


export const actorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                actors: action.actors
            }
        }
        default:
            return state;
    }
};

/*export const setUsersToState = (actors) => {

  return {
      type: SET_USERS,
      actors
  }
};

export const getUsersTC = () => async (dispatch) => {
        let response = await actorsApi.getActors();
        setUsersToState(response.data.results);
        console.log(response.data.results)
};*/


export default actorsReducer;
