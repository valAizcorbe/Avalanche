import React, { Component } from "react";
import "../../styles/Form/form.css";
import { connect } from "react-redux";
import { addRow } from "../../ducks/dataReducer";
import Row from "../Row/Row";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        date: "",
        amount: ""
      }
    };
  }

  addRow = e => {
    e.preventDefault();
    // console.log("hit");
    this.props.addRow();
    // console.log(this.props);
  };

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    // console.log(this.props);
    const { date, amount } = this.state;
    const { rows } = this.props.redux.dataReducer;
    const table = rows.map((element, i) => {
      return (
        <Row
          key={`rows ${i}`}
          i={i}
          amount={this.state.amount}
          date={this.state.date}
        />
      );
    });
    // console.log(this.props.redux.rows);
    // console.log(table, "table");
    return (
      <form className="hole-background">
        <div className="first-box">
          <label>Date</label>
          <input
            onChange={e => this.handleInputs(e)}
            name="date"
            value={date}
            type="date"
          />
          <label>Extra Amount</label>
          <input
            onChange={e => this.handleInputs(e)}
            value={amount}
            name="amount"
            type="number"
            placeholder="$$$"
          />
        </div>
        {table}
        {/* shows the table  */}
        <button onClick={e => this.addRow(e)} className="button-type">
          Add Row
        </button>
        <button>Calculate</button>
      </form>
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
  { addRow }
)(Form);
