import { GET_DETAILS, GET_DETAILS_ERROR } from "../actions/types";
import { act } from "react-dom/test-utils";

const intialState = {
  details: [],
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case GET_DETAILS_ERROR:
      return state;
    default:
      return state;
  }
};
