import {GET_USERS_SUCCESS} from '../actions';

const sampleReducer = (state = { users:null }, action) => {
    switch(action.type){
        case GET_USERS_SUCCESS:
            return {...state, users: action.users};

        default : return state;
    }
};

export default sampleReducer;