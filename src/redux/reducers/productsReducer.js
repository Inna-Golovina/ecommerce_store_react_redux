//import { ActionTypes } from "../constants/action-types";

import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
}

//const { type, payload } = action;

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state, products: payload};
      
    default:
      return state;
  }
}