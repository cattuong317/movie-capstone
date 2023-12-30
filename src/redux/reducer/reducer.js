import { SET_INFO } from "../constant/user";

let initialState = {
  user: JSON.parse(localStorage.getItem("USER_INFO")),
};

export let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFO: {
      state.user = { ...action.payload };
      return { ...state };
    }
    default:
      return state;
  }
};

// truthy falsy

// false, "" , 0 , NaN, null, undefine

// npm i @reduxjs/toolkit
