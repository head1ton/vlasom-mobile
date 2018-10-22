import { API_URL, FB_APP_ID } from '../../constants';
import { AsyncStorage } from'react-native';
import { Facebook } from 'expo';

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SET_USER = 'SET_USER';
const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';

function setLogin(token){
    return {
        type: LOG_IN,
        token
    }
};

function logout(){
    return {
        type: LOG_OUT
    }
};

function setUser(user){
    return {
        type: SET_USER,
        user
    }
}

function setNotifications(notifications){
    return {
        type: SET_NOTIFICATIONS,
        notifications
    }
}

function facebookLogin(){
    return async dispatch => {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(FB_APP_ID,{
            permissions: ['public_profile', 'email']
        })
        if(type === 'success'){
            return fetch(`${API_URL}/users/login/facebook/`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    access_token: token
                })
            })
            .then(response => {
                /*if(!response.ok){
                    dispatch(setLoginError(true))
                }*/
                return response.json()
            })
            .then(json => {
                if(json.token && json.user){
                    dispatch(setLogin(json.token));
                    dispatch(setUser(json.user));
                    return true
                }
                else{
                    return false
                }
            })
        }
   };
}

function usernameLogin(username, password){
    return dispatch => {
        return fetch(`${API_URL}/rest-auth/login/`, {
            method: 'POST',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => {
            return response.json()
        })
        .then(json => {
            if(json.token && json.user){
                dispatch(setLogin(json.token));
                dispatch(setUser(json.user));
                return true
            }
            else{
                return false
            }
        })
        .catch(err => console.log(err));
    }
}

function getNotifications(){
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(`${API_URL}/notifications/`, {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(logout());
            }
            return response.json();
        })
        .then(json => {
            dispatch(setNotifications(json))
        })
        .then(
            fetch(`${API_URL}/notifications/update/`, {
                method: 'PUT',
                headers: {
                    'Authorization': `JWT ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(response.status === 401){
                    dispatch(logout());
                }
            })
        )
    }
}

function getMyProfile(){
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(`${API_URL}/users/my/profile/`, {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(logout());
            }
            return response.json();
        })
        .then(json => dispatch(setUser(json)));
    }
}

const initialState = {
    isLoggedIn: false
}

function reducer(state = initialState, action){
    switch(action.type){
        case LOG_IN:
            return applyLogin(state, action);
        case LOG_OUT:
            return applyLogout(state, action);
        case SET_USER:
            return applySetUser(state, action);
        case SET_NOTIFICATIONS:
            return applySetNotifications(state, action);
        default:
            return state
    }
}

function applyLogin(state, action){
    const { token } = action;
    return {
        ...state,
        isLoggedIn: true,
        token
    }
};

function applyLogout(state, action){
    AsyncStorage.clear();
    return {
        ...state,
        isLoggedIn: false,
        token: ""
    }
};

function applySetUser(state, action){
    const { user } = action;
    return {
        ...state,
        loginUser: user
    }
}

function applySetNotifications(state, action){
    const { notifications } = action;
    return {
        ...state,
        notifications
    }
}

const actionCreators = {
    usernameLogin,
    facebookLogin,
    logout,
    getNotifications,
    getMyProfile
};

export { actionCreators };

export default reducer;