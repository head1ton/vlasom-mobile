import { API_URL } from '../../constants';
import { actionCreators as userActions } from './user';

const SET_FEED = 'SET_FEED';
const SET_SEARCH = 'SET_SEARCH';

function setFeed(feed){
    return {
        type: SET_FEED,
        feed
    }
}

function setSearch(search){
    return {
        type: SET_SEARCH,
        search
    }
}

function getFeed(){
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(`${API_URL}/images/`, {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => dispatch(setFeed(json)));
    }
}

function getSearch(){
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(`${API_URL}/images/search`, {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => dispatch(setSearch(json)));
    }
}

const initialState = {

}

function reducer(state = initialState, action){
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state, action);
        case SET_SEARCH:
            return applySetSearch(state, action);
        default:
            return state;
    }
}

function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    }
}

function applySetSearch(state, action){
    const { search } = action;
    return {
        ...state,
        search
    }
}

const actionCreators = {
    getFeed,
    getSearch
}

export { actionCreators }

export default reducer;