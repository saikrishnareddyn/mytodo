import axios from "axios";
import { GET_DETAILS, GET_DETAILS_ERROR } from "./types";

const BASE_URL = "http://localhost:4000";

export const getDetails = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/details`);
    dispatch({
      type: GET_DETAILS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_DETAILS_ERROR,
      payload: err,
    });
  }
};
