import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getUser } from "../../ducks/reducer";
import "../../styles/Account/account.css";

function Account(props) {
  // let { id, name, lastName, phone } = props.redux.reducer.user;

  // componentDidMount = () => {
  //   props.getUser();
  // };

  // getUser = (id, name, lastName, phone) => {
  //   props.redux.reducer.getUser(id, name, lastName, phone);
  // };

  // let { user } = props.redux;
  return (
    <div className="account-background">
      {/* <Profile /> */}
      <Link to="/form">
        <button>Insert debt Here</button>
      </Link>
      <Link to="/">
        <button onClick={() => this.props.logout()}>Logout</button>
      </Link>
      <div>
        <h1>
          Welcome
          {/* \{props.redux.user.name} {props.redux.user.lastName} */}
        </h1>
        <button>Edit Info</button>
      </div>
    </div>
  );
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
