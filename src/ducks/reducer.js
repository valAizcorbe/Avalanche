import axios from "axios";

const initialState = {
  user: {
    id: 0,
    email: "",
    phone: "",
    picture: "",
    name: "",
    lastName: "",
    signedIn: false
  }
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const UPDATE_USER = "UPDATE_USER";
const GET_USER = "GET_USER";

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj
  };
}

export function getUser(name, lastName, phone, id) {
  let getProfile = axios
    .get(`/api/profile/${id}`, {
      name,
      lastName,
      phone
    })
    .then(res => {
      return res.data;
    });
  return {
    type: GET_USER,
    payload: getProfile
  };
}

export function login(emailLog, passwordLog) {
  let sendMe = axios
    .post("/auth/login", {
      emailLog,
      passwordLog
    })
    .then(response => {
      return response.data;
    });

  return {
    type: LOGIN,
    payload: sendMe
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: null
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return { ...state, user: payload };
    case LOGIN + "_FULFILLED":
      return { ...state, user: payload };
    case LOGOUT:
      return { ...state, user: { signedIn: false } };
    case GET_USER + "_FULFILLED":
      return { ...state, user: payload };

    default:
      return state;
  }
}
