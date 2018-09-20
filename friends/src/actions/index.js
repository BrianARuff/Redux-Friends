import axios from 'axios';

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS =  "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";
export const POSTING_NEW_FRIEND = "POSTING_NEW_FRIEND";
export const POSTING_NEW_FRIEND_SUCCESS = "POSTING_NEW_FRIEND_SUCCESS";
export const POSTING_NEW_FRIEND_FAILURE = "POSTING_NEW_FRIEND_FAILURE";

export const fetchFriends = () => {
  return dispatch => {
    dispatch({type: FETCHING_FRIENDS});
    axios
      .get('http://localhost:5000/api/friends/')
      .then(resp => {
        dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: resp.data})
      })
      .catch(err => dispatch({
        type: FETCHING_FRIENDS_FAILURE,
        payload: err}
      ));
  }  
}

export const addNewFriend = (friend) => {
  return dispatch => {
    dispatch({type: POSTING_NEW_FRIEND});
    axios.post('http://localhost:5000/api/friends/', friend)
         .then(resp => {
           dispatch({type: POSTING_NEW_FRIEND_SUCCESS, payload: resp.data});
         })
         .catch(err => dispatch({type: POSTING_NEW_FRIEND_FAILURE, payload: err }));
  }
}