import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getUser } from "../../ducks/reducer";
import Profile from "../Profile/Profile";
// import useAxios from "axios-hooks";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  // useEffect(() => {
  //   setUser(props.state.user);
  // }, [props.state.user.id]);

  // console.log(user);
  render() {
    let { user } = this.state;
    return (
      <div>
        <h1>
          Hello {user.user_name} {user.user_lastName}!
        </h1>
        <Profile />
        <Link to="/form">
          <button>Insert debt Here</button>
        </Link>
        <Link to="/">
          <button onClick={() => this.props.logout()}>Logout</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { logout, getUser }
)(Account);
