import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getUser } from "../../ducks/reducer";
// import Profile from "../Profile/Profile";
import "../../styles/Account/account.css";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "", lastName: "", phone: "" }

      // id: 0,
      // editing: false,
      // newName: "",
      // newLastName: "",
      // newPhone: "",
      // newPicture: ""
    };
  }
  componentDidMount = () => {
    this.props.getUser();
  };

  // let { user } = props.redux;
  render() {
    // let { name, lastName, phone } = this.props.redux.reducer.user;
    return (
      <section className="account-background">
        {/* {users.map((element, id) => {
          return (
            <div>
              <h2>{name}</h2>
              <h2>{lastName}</h2>
              <h2>{phone}</h2>
            </div>
          );
        })} */}
        <h1>
          {/* Welcome {name} {lastName} */}
          {/* <Profile /> */}
        </h1>
        {/* <p>Phone Number: {phone}</p> */}
        <Link to="/form">
          <button>Insert debt Here</button>
        </Link>
        <Link to="/">
          <button onClick={() => this.props.logout()}>Logout</button>
        </Link>
        <div>
          <button>Edit Info</button>
        </div>
      </section>
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
