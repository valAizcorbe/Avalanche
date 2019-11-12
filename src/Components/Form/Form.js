import React, { Component } from "react";
import "../../styles/Form/form.css";
import { connect } from "react-redux";
import { addRow, createChartData } from "../../ducks/dataReducer";
import { Link } from "react-router-dom";
import Row from "../Row/Row";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        date: "",
        amount: 0
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

  handleResult = e => {
    e.preventDefault();
    let data = this.props.redux.dataReducer.data;
    let rows = this.props.redux.dataReducer.rows.length - 1;
    // console.log(rows);
    this.props.createChartData(data, rows);
  };

  render() {
    console.log(this.props);
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
          <label>Month</label>
          <input
            name="date"
            onChange={e => this.handleInputs(e)}
            list="date"
            value={date}
          />
          <datalist id="date">
            <option value="January" />
            <option value="February" />
            <option value="March" />
            <option value="April" />
            <option value="May" />
            <option value="June" />
            <option value="July" />
            <option value="August" />
            <option value="September" />
            <option value="October" />
            <option value="November" />
            <option value="December" />
          </datalist>
          <label>Extra Amount</label>
          <input
            onChange={e => this.handleInputs(e)}
            value={amount}
            name="amount"
            placeholder="$$$"
            type="number"
          />
        </div>
        <div>{table}</div>
        <div>
          <button onClick={e => this.addRow(e)} className="button-type">
            Add Row
          </button>
          <button onClick={e => this.handleResult(e)}>Calculate</button>
          <Link to="/chart">
            <button>Show chart</button>
          </Link>
        </div>
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
  { addRow, createChartData }
)(Form);
