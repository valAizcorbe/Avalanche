import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getUser, editInfo, deleteInfo } from "../../ducks/reducer";

import "../../styles/Account/account.css";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user.user,
      id: props.user.user_id,
      name: props.user.user_name,
      lastName: props.user.user_lastname,
      phone: props.user.user_phone,
      editing: false
    };
  }

  // componentDidUpdate = prevProps => {
  //   if (prevProps.users !== this.props.users) {
  //     this.setState({ user: this.props.user.user });
  //   }
  // };

  edit = () => {
    this.setState({ editing: true });
  };

  saveChanges = () => {
    const { name, lastName, phone } = this.state;
    console.log(this.props.user.user.user_id);
    this.props.editInfo(name, lastName, phone, this.props.user.user.user_id);
    // console.log(this.props.editInfo(name, lastName, phone, id));
    this.setState({
      editing: false
    });
  };

  handleInputs = e => {
    const { name, value } = e.target;
    e.persist();
    this.setState({
      [name]: value
    });
  };

  cancel = () => {
    const { user_name, user_lastName, user_phone } = this.props.user.user;

    this.setState({ editing: false });
    this.setState({ user_name, user_lastName, user_phone });
  };

  render() {
    const { user } = this.props.user;
    console.log(user);
    let { name, lastName, phone } = this.state;
    return (
      <section className="account-background">
        <div className="info">
          <h2>
            Welcome {user.user_name} {user.user_lastname} !
          </h2>
          <h2>Phone Number: {user.user_phone}</h2>
          {this.state.editing ? (
            <div>
              <div className="edit-inputs">
                <input
                  value={name}
                  onChange={e => this.handleInputs(e)}
                  name="name"
                  type="text"
                />
                <input
                  value={lastName}
                  onChange={e => this.handleInputs(e)}
                  name="lastName"
                  type="text"
                />
                <input
                  value={phone}
                  onChange={e => this.handleInputs(e)}
                  name="phone"
                  type="number"
                />
                <div className="buttons">
                  <button onClick={this.saveChanges}>Save Changes</button>
                  <button onClick={this.cancel}>Cancel</button>
                </div>
              </div>
            </div>
          ) : null}
          {this.state.editing ? null : (
            <button onClick={this.edit}>Edit</button>
          )}

          <button onClick={() => this.props.deleteInfo(user.user_id)}>
            Delete
          </button>
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
  { logout, getUser, editInfo, deleteInfo }
)(Account);
