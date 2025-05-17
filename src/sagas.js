import {takeEvery, call, put, select } from 'redux-saga/effects';
import {GET_USERS_SUCCESS, GET_USERS_FETCH, USER_LOGIN, LOGIN_SUCCESS} from './actions';
import axios from 'axios';

function usersFetch(){
    // return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    //     console.log(response)
    //     return response.json()
    // });
    // return axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    //     console.log(response)
    //     return response.data
    // });
    // return axios.post(' https://interns-mini-project.onrender.com/api/v1/auth/signup', {
    //     first_name: "2",
    //     last_name: "2",
    //     email: "2@gmail.com",
    //     password: "2"
    // }).then(response => {
    //     console.log(response);
    //     return response.data;
    // })
    return axios.post('https://interns-mini-project.onrender.com/api/v1/auth/login', 
    {
        email: "thilak@gmail.com",
        password: "thilak" 
    }).then(response => {
        console.log(response)
        return response.data
    })
}

function makeLogin({email, password}){
    console.log(email+" "+password)
    return axios.post('https://interns-mini-project.onrender.com/api/v1/auth/login', 
        {email, password}
    ).then(response => response.data.data.token)
}
const getCredentials = (state) => state.auth;
function* workUserLogin(){
    const credentials = yield select(getCredentials);
    const token = yield call(makeLogin, credentials);
    yield put({type: LOGIN_SUCCESS, token})
}

function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsers);
    yield takeEvery(USER_LOGIN, workUserLogin)
}

function* workGetUsers() { 
    const users = yield call(usersFetch);
    yield put({type: GET_USERS_SUCCESS, users});
}

export default mySaga;