 import {FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, POSTING_NEW_FRIEND_SUCCESS,
  POSTING_NEW_FRIEND_FAILURE} from '../actions';

const initialState  = {
  friends: [],
  fetching: false,
  fetched: false,
  errors: null,
}

export const friendReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_FRIENDS:
      return Object.assign({}, state, {fetching: true});
    case FETCHING_FRIENDS_SUCCESS: 
      return Object.assign({}, state, {friends: action.payload, fetching: false, fetched: true})
    case FETCHING_FRIENDS_FAILURE:
      return Object.assign({}, state, {fetching: false, fetched: false, errors: action.payload})
    case POSTING_NEW_FRIEND_SUCCESS:
      return Object.assign({}, state, {friends: [...state.friends, action.payload]})
    case POSTING_NEW_FRIEND_FAILURE:
      return Object.assign({}, state, {errors: action.payload})
    default:
      return state;
  }
}