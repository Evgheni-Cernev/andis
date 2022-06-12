import { USER_LOGIN, USER_LOGOUT } from "./types";
import api from "../../services/api";

export const userLogin = (username, password) => async (dispatch) => {
  try {
    const user = await api.post("/auth/signin", { username, password });

    localStorage.setItem("accessToken", user.accessToken);

    dispatch({ type: USER_LOGIN, payload: { ...user } });
  } catch {
    alert("No user found!");

    dispatch({ type: USER_LOGOUT });
    return;
  }
};

export const userAuth = async (dispatch) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return;
  }

  try {
    const user = await api.get("/users/me", {}, { "x-access-token": token });

    dispatch({ type: USER_LOGIN, payload: { ...user } });
  } catch {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    alert("No user found!");
    dispatch({ type: USER_LOGOUT });
  }
};
