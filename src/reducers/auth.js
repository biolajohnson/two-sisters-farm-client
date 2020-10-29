import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "../actions/types";

const initialState = {
  loading: true,
  user: null,
  isAuthenticated: null,
  token: localStorage.getItem("token"),
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_FAILED:
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    default:
      return state;
  }
};
