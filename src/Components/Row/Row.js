import React from "react";

class Row extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: "",
      type: "",
      rate: "",
      payment: ""
    };
  }

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    let { balance, type, rate, payment } = this.state;
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
              <td>
                <input
                  onChange={e => this.handleInputs(e)}
                  value={payment}
                  type="number"
                  placeholder="$"
                  name="payment"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button>Delete</button>
      </div>
    );
  }
}

export default Row;
