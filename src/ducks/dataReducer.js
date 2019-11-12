import axios from "axios";

const initialState = {
  rows: [""],
  data: [],
  chartData: [{}, {}, { payload: [] }]
};

const DELETE_ROW = "DELETE_ROW";
const ADD_ROW = "ADD_ROW";
const SAVE_INPUTS = "SAVE_INPUTS";
const GET_DATA = "GET_DATA";
const CREATE_CHART_DATA = "CREATE_CHART_DATA";

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
      // console.log(res.data);

      return res.data;
    });
  // console.log(typeof save, save);
  return {
    type: SAVE_INPUTS,
    payload: save
  };
}

export function getData(
  user_data_id,
  date,
  amount,
  type,
  balance,
  rate,
  payment,
  savings,
  disposable
) {
  let data = axios
    .get(`/api/table/${user_data_id}`, {
      user_data_id,
      date,
      amount,
      type,
      balance,
      rate,
      payment,
      savings,
      disposable
    })
    .then(res => {
      return res.data;
    });
  return {
    type: GET_DATA,
    payload: data
  };
}

export function createChartData(data, rows) {
  let result = axios.post("/api/chartData", { data, rows }).then(res => {
    // console.log(res.data);
    return res.data;
  });
  return {
    type: CREATE_CHART_DATA,
    payload: result
  };
}

export default function dataReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ROW:
      // console.log(state.rows);
      return { ...state, rows: [...state.rows, payload] };
    case SAVE_INPUTS + "_FULFILLED":
      return { ...state, data: [...state.data, payload[0]] };
    case DELETE_ROW:
      state.rows.splice(payload, 1);
      return { ...state };
    case GET_DATA + "_FULFILLED":
      return { ...state, data: [...state.data, { payload }] };
    case CREATE_CHART_DATA + "_FULFILLED":
      return { ...state, chartData: [...state.data, { payload }] };
    default:
      return state;
  }
}
