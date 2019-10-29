import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../../ducks/reducer";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = () => {
    axios
      .post("/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        this.props.history.push("/dashboard");
        this.props.updateUser(res.data);
        this.props.login();
        this.setState({
          email: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <label>Email</label>
        <input
          name="email"
          value={email}
          onChange={e => this.handleInputs(e)}
        />
        <label>Password</label>
        <input
          name="password"
          value={password}
          type="password"
          onChange={e => this.handleInputs(e)}
        />
        <button onClick={this.handleLogin}>Login</button>
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
)(Login);
