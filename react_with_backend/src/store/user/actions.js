import { SET_LOGIN, SET_USERNAME } from "/actionTypes";
// import axios from "axios";

export const setLogin = (isLoggedIn) => {
    return {
      type: SET_LOGIN,
      payload: isLoggedIn,
    };
  };
  
  export const setUsername = (username) => {
    return {
      type: SET_USERNAME,
      payload: username,
    };
  };
