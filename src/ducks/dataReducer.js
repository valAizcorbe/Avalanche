import axios from "axios";

const initialState = {
  rows: [""],
  data: [
    {
      id: 0,
      date: new Date(),
      amount: 0,
      type: "",
      balance: 0,
      rate: 0.0,
      payment: 0
    }
  ]
};

const DELETE_ROW = "DELETE_ROW";
const ADD_ROW = "ADD_ROW";
const SAVE_INPUTS = "SAVE_INPUTS";

export function addRow() {
  // console.log("hey");
  return {
    type: ADD_ROW,
    payload: ""
  };
}

export function deleteRow() {
  return {
    type: DELETE_ROW,
    payload: null
  };
}

export function saveInputs(id, date, amount, type, balance, rate, payment) {
  console.log("save inputs works");
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

export default function dataReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ROW:
      console.log(state.rows);
      return { ...state, rows: [...state.rows, payload] };
    case SAVE_INPUTS + "_FULFILLED":
      return { ...state, data: payload };
    case DELETE_ROW:
      return { ...state, rows: payload };
    default:
      return state;
  }
}
