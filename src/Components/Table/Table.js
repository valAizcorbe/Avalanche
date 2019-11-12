import React, { Component } from "react";
import { getData } from "../../ducks/dataReducer";
import { connect } from "react-redux";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: 0,
      type: "",
      amount: "",
      date: "",
      balance: "",
      rate: "",
      payment: "",
      savings: "",
      disposable: ""
    };
  }

  componentDidMount() {}

  render() {
    const { data } = this.props;
    console.log(this.props);
    return (
      <div>
        <p>{data[0].type}</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.dataReducer
  };
}
export default connect(
  mapStateToProps,
  getData
)(Table);
