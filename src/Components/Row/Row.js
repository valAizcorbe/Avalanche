import React from "react";
import { connect } from "react-redux";
import { saveInputs, deleteRow } from "../../ducks/dataReducer";

class Row extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: [0],
      type: [""],
      rate: [0.0],
      payment: 0
    };
  }

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  deleteRow = e => {
    console.log("delete function");
    e.preventDefault();
    this.props.deleteRow(this.props.i);
  };

  saveInputs = e => {
    e.preventDefault();
    console.log("hit");
    console.log(this.props.redux.dataReducer);
    let { type, balance, rate, payment } = this.state;
    this.props.saveInputs(
      this.props.redux.reducer.user.user_id,
      this.props.date,
      this.props.amount,
      type,
      balance,
      rate,
      payment
    );
    // console.log(this.props);
  };

  render() {
    console.log(this.props);
    let { balance, type, rate } = this.state;
    this.state.payment = (rate / 100) * 0.07 * balance;
    console.log(this.state.payment);
    return (
      <div>
        <table className="big-table">
          <tbody>
            <tr>
              <td>Type</td>
              <td>Remaining Balance</td>
              <td>Interest Rate</td>
              <td>Minimum Payment</td>
            </tr>
            <tr>
              <td id="cell0-0">
                <input
                  name="type"
                  onChange={e => this.handleInputs(e)}
                  list="type"
                  value={type}
                />
                <datalist id="type">
                  <option value="Loan" />
                  <option value="Credit Card" />
                  <option value="Other" />
                </datalist>
              </td>
              <td>
                <input
                  onChange={e => this.handleInputs(e)}
                  value={balance}
                  type="number"
                  placeholder="$$"
                  name="balance"
                />
              </td>
              <td>
                <input
                  onChange={e => this.handleInputs(e)}
                  value={rate}
                  type="number"
                  placeholder="%"
                  name="rate"
                />
              </td>
              <td>{this.state.payment}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={e => this.deleteRow(e)}>Delete</button>
        <button onClick={e => this.saveInputs(e)}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    redux: state
  };
};

export default connect(
  mapStateToProps,
  { saveInputs, deleteRow }
)(Row);
