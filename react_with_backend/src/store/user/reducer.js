import { SET_LOGIN, SET_USERNAME } from "/actionTypes";
const initialState = {
  isLoggedIn: false,
  username: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
        isLoggedIn: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export const loginState = (state) => state.authReducer
