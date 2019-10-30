import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../../ducks/reducer";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailLog: "",
      passwordLog: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: 0
    };
  }

  handleLogin = () => {
    axios
      .post("/auth/login", {
        emailLog: this.state.emailLog,
        passwordLog: this.state.passwordLog
      })
      .then(res => {
        // this.props.history.push("/dashboard");
        this.props.updateUser(res.data);
        this.props.login();
        this.setState({
          emailLog: "",
          passwordLog: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleRegister = () => {
    const { email, password, firstName, lastName, phone } = this.state;
    axios
      .post("auth/register", {
        email,
        password,
        firstName,
        lastName,
        phone
      })
      .then(res => {
        this.props.login();
        this.props.updateUser(res.data);
        this.setState({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          phone: 0
        });
      });
  };

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      email,
      password,
      phone,
      lastName,
      firstName,
      emailLog,
      passwordLog
    } = this.state;
    return (
      <div>
        <label>Email: </label>
        <input
          name="emailLog"
          value={emailLog}
          type="email"
          onChange={e => this.handleInputs(e)}
        />
        <label>Password:</label>
        <input
          name="passwordLog"
          value={passwordLog}
          type="password"
          onChange={e => this.handleInputs(e)}
        />
        <button onClick={this.handleLogin}>Login</button>
        <div>
          <label>First Name:</label>
          <input
            name="firstName"
            value={firstName}
            onChange={e => this.handleInputs(e)}
          />
          <label>Last Name:</label>
          <input
            name="lastName"
            value={lastName}
            onChange={e => this.handleInputs(e)}
          />
          <label>Email:</label>
          <input
            name="email"
            value={email}
            type="email"
            onChange={e => this.handleInputs(e)}
          />
          <label>Password:</label>
          <input
            name="password"
            value={password}
            type="password"
            onChange={e => this.handleInputs(e)}
          />

          <p>
            If you want to receive FREE reminders via TEXT, please insert your
            phone number
          </p>
          <label>Phone Number:</label>
          <input
            name="phone"
            value={phone}
            onChange={e => this.handleInputs(e)}
          />
          <button onClick={this.handleRegister}>Register</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return {
    user
  };
};

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
