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
        fetch(`${API_URL}/images/search/`, {
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

function searchByTag(tag){
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(`${API_URL}/images/search/?tags=${tag}`, {
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

function likePhoto(photoId){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        return fetch(`${API_URL}/images/${photoId}/like/`, {
            method: 'POST',
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(response.ok){
                return true
            }
            else{
                return false
            }
        })
    }
}

function unlikePhoto(photoId){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        return fetch(`${API_URL}/images/${photoId}/unlike/`, {
            method: 'DELETE',
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(response.ok){
                return true
            }
            else{
                return false
            }
        })
    }
}

function interestPhoto(photoId){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        return fetch(`${API_URL}/images/interest/image/${photoId}/`, {
            method: 'POST',
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(response.ok){
                return true
            }
            else{
                return false
            }
        })
    }
}

function uninterestPhoto(photoId){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        return fetch(`${API_URL}/images/interest/image/${photoId}/`, {
            method: 'DELETE',
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(response.ok){
                return true
            }
            else{
                return false
            }
        })
    }
}

function getPhotoDetail(photoId){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        return fetch(`${API_URL}/images/${photoId}/`,{
            method: 'GET',
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout())
            }
            return response.json()
        })
        .then(json => {
            return json
        })
    }
}

function getPhotoLikes(photoId){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
         return fetch(`${API_URL}/images/${photoId}/like/`, {
            method: 'GET',
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
        .then(json => json);
    }
}

function getPhotoComments(photoId){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        return fetch(`${API_URL}/images/${photoId}/comments/`, {
            method: 'GET',
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
        .then(json => json);
    }
}

function commentOnImage(photoId, message){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        return fetch(`${API_URL}/images/${photoId}/comments/`, {
            method: 'POST',
            headers: {
                "Authorization": `JWT ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        })
        .then(response => {
            if(response.status === 401){
                dispatch(logout());
            }
            return response.json()
        })
        .then(json => {
            if(json.message){
                return json;
            }
        })
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
    getSearch,
    likePhoto,
    unlikePhoto,
    interestPhoto,
    uninterestPhoto,
    searchByTag,
    getPhotoDetail,
    getPhotoLikes,
    getPhotoComments,
    commentOnImage
}

export { actionCreators }

export default reducer;