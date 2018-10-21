import { API_URL } from '../../constants';

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
            if(!response.ok){
                dispatch(setLoginError(true))
            }
            return response.json()
        })
        .then(json => {
            if(json.token){
                dispatch(saveToken(json.token))
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
        default:
            return state
    }
}

const actionCreators = {
    usernameLogin
};

export { actionCreators };

export default reducer;