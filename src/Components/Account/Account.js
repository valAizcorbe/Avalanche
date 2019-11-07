import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getUser } from "../../ducks/reducer";

import "../../styles/Account/account.css";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      name: "",
      lastName: "",
      phone: ""
    };
  }

  render() {
    const { user } = this.props.user;

    return (
      <section className="account-background">
        <div className="info">
          <h2>
            Welcome {user.user_name} {user.user_lastname} !
          </h2>
          <h2>Phone Number: {user.user_phone}</h2>
        </div>
        <Link to="/form">
          <button>Insert debt Here</button>
        </Link>
        <Link to="/">
          <button onClick={() => this.props.logout()}>Logout</button>
        </Link>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.reducer
  };
}

export default connect(
  mapStateToProps,
  { logout, getUser }
)(Account);
