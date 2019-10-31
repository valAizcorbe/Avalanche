import React, { useState, useEffect } from "react";

const Form = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [type, setType] = useState("");
  const [rate, setRate] = useState("");
  const [payment, setPayment] = useState("");
  const [id, setId] = useState(0);
  const [rows, setRows] = useState([]);

  const addRow = () => {};

  return (
    <form>
      <div></div>
      <label>Date</label>
      <input onChange={e => setDate(e.target.value)} value={date} type="date" />
      <label>Extra Amount</label>
      <input
        onChange={e => setAmount(e.target.value)}
        value={amount}
        type="number"
        placeholder="$$$"
      />
      <table id="simple-board">
        <tbody>
          <tr>
            <td>Type</td>
            <td>Remaining Balance</td>
            <td>Interest Rate</td>
            <td>Minimum Payment</td>
          </tr>
          <tr>
            <td id="cell0-0">
              <input
                onChange={e => setType(e.target.value)}
                list="type"
                value={type}
              />
              <datalist id="type">
                <option value="Loan" />
                <option value="Credit Card" />
                <option value="Other" />
              </datalist>
            </td>
            <td>
              <input
                onChange={e => setBalance(e.target.value)}
                value={balance}
                type="number"
                placeholder="$$"
              />
            </td>
            <td>
              <input
                onChange={e => setRate(e.target.value)}
                value={rate}
                type="number"
                placeholder="%"
              />
            </td>
            <td>
              <input
                onChange={e => setPayment(e.target.value)}
                value={payment}
                type="number"
                placeholder="$"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button>Add Row</button>
    </form>
  );
};

export default Form;
