import { SET_CREDENTIALS, LOGIN_SUCCESS } from "../actions"

const initialState = {
    email: "",
    password: "",
}

const token = ""

export default function loginReducer (state = initialState, action) {
    switch(action.type){
        case SET_CREDENTIALS:
           return {
            ...state,
            email: action.payload.email,
            password: action.payload.password
           };
        case LOGIN_SUCCESS:
            console.log("save token"+action.token);
            return action.token;
        default: return state;
    }
}