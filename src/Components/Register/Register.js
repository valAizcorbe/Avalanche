import React from "react";
import Login from "../Login/Login";

function Register() {
  return (
    <div>
      <label>First Name</label>
      <input />
      <label>Last Name</label>
      <input />
      <label>Email</label>
      <input />
      <label>Password</label>
      <input />

      <p>
        If you want to receive FREE reminders via TEXT insert your phone number
      </p>
      <label>Phone Number</label>
      <input />
      <button>Register</button>
      <Login />
    </div>
  );
}

export default Register;
