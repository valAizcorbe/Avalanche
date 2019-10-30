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

export function getUser(userObj) {
  return {
    type: GET_USER,
    payload: userObj
  };
}

export function login() {
  return {
    type: LOGIN,
    payload: null
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
    case LOGIN:
      return { ...state, user: { signedIn: true } };
    case LOGOUT:
      return { ...state, user: { signedIn: false } };
    case GET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}
