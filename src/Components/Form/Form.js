import React, { useState, useEffect } from "react";

const Form = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [type, setType] = useState("");
  const [rate, setRate] = useState(0);
  const [payment, setPayment] = useState(0);

  return (
    <div>
      <label>Date</label>
      <input />
      <label>Extra Amount</label>
      <input onChange={e => setAmount(e.target.value)} value={amount} />
      <div>
        <label>Type</label>
        <input onChange={e => setType(e.target.value)} value={type} />
        <label>Remaining Balance</label>
        <input onChange={e => setBalance(e.target.value)} value={balance} />
        <label>Interest Rate</label>
        <input onChange={e => setRate(e.target.value)} value={rate} />
        <label>Minimum Payment</label>
        <input onChange={e => setPayment(e.target.value)} value={payment} />
      </div>
    </div>
  );
};

export default Form;
