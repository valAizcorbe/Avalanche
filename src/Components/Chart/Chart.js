import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { getData } from "../../ducks/dataReducer";
import { connect } from "react-redux";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
      chartData: [],
      balance: [],
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August"
        ],
        datasets: [
          {
            label: "Payment",
            backgroundColor: "rgba()",

            data: this.props.redux.dataReducer.chartData[2].payload.map(
              element => element.payment
            )
          },
          {
            label: "Savings",
            backgroundColor: "rgba()",
            data: this.props.redux.dataReducer.chartData[2].payload.map(
              element => element.savings
            )
          },
          {
            label: "Disposable",
            data: this.props.redux.dataReducer.chartData[2].payload.map(
              element => element.disposable
            )
          }
        ]
      }
    };
  }
  render() {
    console.log(this.props.redux.dataReducer.chartData);

    return (
      <div>
        <Line
          className="chartInfo"
          data={this.state.data}
          options={{
            responsive: true,
            title: {
              display: true,
              text: "Chart",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
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
  { getData }
)(Chart);
