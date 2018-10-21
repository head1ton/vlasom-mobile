import { API_URL } from '../../constants';
import { AsyncStorage } from'react-native';

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SET_USER = 'SET_USER';

function setLogin(token){
    return {
        type: LOG_IN,
        token
    }
};

function setLogout(){
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

function usernameLogin(username, password){
    return function(dispatch){
        fetch(`${API_URL}/rest-auth/login/`, {
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
            /*if(!response.ok){
                dispatch(setLoginError(true))
            }*/
            return response.json()
        })
        .then(json => {
            if(json.token){
                dispatch(setLogin(json.token))
            }
            if(json.user){
                dispatch(setUser(json.user))
            }
        })
        .catch(err => console.log(err));
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

const actionCreators = {
    usernameLogin
};

export { actionCreators };

export default reducer;