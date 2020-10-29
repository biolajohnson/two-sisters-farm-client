import {
  GET_PROFILE,
  GET_PROFILES,
  CLEAR_PROFILE,
  DELETE_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

// get a profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: PROFILE_ERROR,
      payload: { message: e.response.statusText, status: e.response.status },
    });
  }
};
//get all farmer profiles
export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("/api/profile");
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: PROFILE_ERROR,
      payload: { message: e.response.statusText, status: e.response.status },
    });
  }
};

// create or edit farmers profile

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await axios.post("/api/profile", formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert(edit ? "Profile Edited" : "Profile Created", '"success'));
    if (!edit) {
      history.push("/dashboard");
    }
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { message: e.response.statusText, status: e.response.status },
    });
  }
};
//get profile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/${userId}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: PROFILE_ERROR,
      payload: { message: e.response.statusText, status: e.response.status },
    });
  }
};

//delete account
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete("/api/profile");
      dispatch({
        type: CLEAR_PROFILE,
      });
      dispatch({
        type: DELETE_PROFILE,
      });
      dispatch(setAlert("Your account has been deleted", "success"));
    } catch (e) {
      console.log(e.message);
      dispatch({
        type: PROFILE_ERROR,
        payload: { message: e.response.statusText, status: e.response.status },
      });
    }
  }
};
