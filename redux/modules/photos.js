import { API_URL } from '../../constants';
import { actionCreators as userActions } from './user';
import uuidv1 from 'uuid/v1';

const SET_FEED = 'SET_FEED';
const SET_FEED_MORE = 'SET_FEED_MORE';
const SET_SEARCH = 'SET_SEARCH';
const SET_INTEREST = 'SET_INTEREST';
const SET_CATEGORY = 'SET_CATEGORY';

function setFeed(feed){
    return {
        type: SET_FEED,
        feed
    }
}

function setFeedMore(feedMore){
    return {
        type: SET_FEED_MORE,
        feedMore
    }
}

function setSearch(search){
    return {
        type: SET_SEARCH,
        search
    }
}

function setInterest(interest){
    return {
        type: SET_INTEREST,
        interest
    }
}

function setCategory(categoryName){
    return {
        type: SET_CATEGORY,
        categoryName
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

function getFeedMore(page){
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        return fetch(`${API_URL}/images/?page=${page}`, {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            if(!(response.status === 404)){
                return response.json()
            }
            else{
                return JSON.stringify({
                    NotFound: true
                })
            }
        })
        .then(json => {
            if(json.NotFound){
                return false
            }
            else{
                return json
            }
        })
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

function allCategoryName(){
    return (dispatch, getState) => {
        const { user : {token} } = getState();
        return fetch(`${API_URL}/images/category/all/name/`, {
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
        .then(json => json);
    }
}

function getCategoryImage(categoryName){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        return fetch(`${API_URL}/images/category/images/${categoryName}/`, {
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
        .then(json => json);
    }
}

function uploadPhoto(image, category, location, description, tags){
    const tagsArray = tags.split(",");
    const data = new FormData();
    data.append('category',category);
    data.append('location',location);
    data.append('description',description);
    data.append('tags',JSON.stringify(tagsArray));
    data.append('image',{
        uri: image,
        type: 'image/jpeg',
        name: `${uuidv1()}.jpg`
    });
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        return fetch(`${API_URL}/images/`,{
            method: 'POST',
            headers: {
                "Authorization": `JWT ${token}`,
                "Content-Type": 'multipart/form-data'
            },
            body: data
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            else if(response.ok){
                dispatch(getFeed());
                dispatch(userActions.getMyProfile())
                return true
            }
            else{
                return false
            }
        })
        .then(json => json);
    }
}

function getInterestList(){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch(`${API_URL}/images/interest/list/`, {
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json()
        })
        .then(json => {
            return dispatch(setInterest(json))
        })
    }
}

function getCategory(){
    return (dispatch, getState) => {
        const { user : {token} } = getState();
        fetch(`${API_URL}/images/category/all/name/`, {
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
        .then(json => dispatch(setCategory(json)));
    }
};

const initialState = {

}

function reducer(state = initialState, action){
    switch(action.type){
        case SET_FEED:
            return applySetFeed(state, action);
        case SET_FEED_MORE:
            return applySetFeedMore(state, action);
        case SET_SEARCH:
            return applySetSearch(state, action);
        case SET_INTEREST:
            return applySetInterest(state, action);
        case SET_CATEGORY:
            return applySetCategory(state, action);
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

function applySetFeedMore(state, action){
    const { feedMore } = action;
    return {
        ...state,
        feed: [...state.feed, ...feedMore]
    }
}

function applySetSearch(state, action){
    const { search } = action;
    return {
        ...state,
        search
    }
}

function applySetInterest(state, action){
    const { interest } = action;
    return {
        ...state,
        interest
    }
}

function applySetCategory(state, action){
    const { categoryName } = action;
    return {
        ...state,
        categoryName
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
    commentOnImage,
    allCategoryName,
    uploadPhoto,
    getInterestList,
    getCategory,
    getCategoryImage,
    getFeedMore
}

export { actionCreators }

export default reducer;