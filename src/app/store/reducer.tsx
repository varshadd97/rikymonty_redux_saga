/** @format */

import { combineReducers } from "redux";
import { action } from "typesafe-actions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const episodeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_EPISODE_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_EPISODE_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_EPISODE_FAILURE":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  episode: episodeReducer,
});

export default rootReducer;
