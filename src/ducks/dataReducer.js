import axios from "axios";

const initialState = {
  rows: [""],
  data: [
    // {
    //   id: 0,
    //   date: "",
    //   amount: 0,
    //   type: "",
    //   balance: 0,
    //   rate: 0.0,
    //   payment: 0
    // }
  ]
};

const DELETE_ROW = "DELETE_ROW";
const ADD_ROW = "ADD_ROW";
const SAVE_INPUTS = "SAVE_INPUTS";
const GET_DATA = "GET_DATA";

export function addRow() {
  // console.log("hey");
  return {
    type: ADD_ROW,
    payload: ""
  };
}

export function deleteRow(id) {
  console.log(id);

  // console.log(newRow);
  return {
    type: DELETE_ROW,
    payload: id
  };
}

export function saveInputs(id, date, amount, type, balance, rate, payment) {
  // console.log("save inputs works");
  let save = axios
    .post(`/api/form`, {
      id,
      date,
      amount,
      type,
      balance,
      rate,
      payment
    })
    .then(res => {
      return res.data;
    });
  return {
    type: SAVE_INPUTS,
    payload: save
  };
}

export function getData(id, date, amount, type, balance, rate, payment) {
  let data = axios
    .get("/api/chart", { id, date, amount, type, balance, rate, payment })
    .then(res => {
      return res.data;
    });
  return {
    type: GET_DATA,
    payload: data
  };
}

export default function dataReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ROW:
      console.log(state.rows);
      return { ...state, rows: [...state.rows, payload] };
    case SAVE_INPUTS + "_FULFILLED":
      return { ...state, data: [...state.data, payload] };
    case DELETE_ROW:
      state.rows.splice(payload, 1);
      return { ...state };
    case GET_DATA + "_FULFILLED":
      return { ...state, data: [...state.data, payload] };
    default:
      return state;
  }
}
