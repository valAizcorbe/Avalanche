import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../ducks/reducer";
import Profile from "../Profile/Profile";

const Account = props => {
  const [user, setUser] = useState({});
  // const [name, setName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phone, setPhone]

  useEffect(() => {
    setUser(props.state.user);
  }, [props.state.user.id]);

  // console.log(props);

  // const mappedUser = user.map((e, i) => {
  //   return <p key={i}>{e}</p>;
  // });

  // console.log(user);
  return (
    <div>
      {/* {user} */}
      <Profile />
      <Link to="/form">
        <button>Insert debt Here</button>
      </Link>
      <Link to="/">
        <button onClick={() => props.logout()}>Logout</button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Account);
