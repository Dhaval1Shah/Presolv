import { BehaviorSubject } from "rxjs";

import { handleResponse } from "../helpers";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "../../../redux/userRedux";

import { publicRequest, userRequest } from "../../../requestMethods";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
);

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user).then(handleResponse);
    dispatch(loginSuccess(res.data));
    currentUserSubject.next(res);
  } catch (err) {
    dispatch(loginFailure());
  }
};

const logout = async (dispatch, user) => {
  dispatch(logoutStart());
  try {
    const res = await userRequest.post("/logout");
    dispatch(logoutSuccess(res.data));
    currentUserSubject.next(null);
  } catch (err) {
    dispatch(logoutFailure());
  }
};
