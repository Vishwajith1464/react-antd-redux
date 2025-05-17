export const GET_USERS_FETCH = 'GET_USERS_FETCH'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const USER_LOGIN = 'USER_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SET_CREDENTIALS = 'SET_CREDENTIALS'

export const getUsersFetch = () => ({
    type: GET_USERS_FETCH
});

export const userLogin = () => ({
    type: USER_LOGIN
});

export const setCredentials = (payload) => ({
    type: SET_CREDENTIALS,
    payload
})