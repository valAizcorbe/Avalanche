import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { getData } from "../../ducks/dataReducer";
import { connect } from "react-redux";
import "../../styles/Chart/chart.css";

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
            backgroundColor: "rgba(145, 58, 81,1)",

            data: this.props.redux.dataReducer.chartData[2].payload.map(
              element => element.payment
            )
          },
          {
            label: "Disposable",
            backgroundColor: "rgba(35, 94, 112, 1)",
            data: this.props.redux.dataReducer.chartData[2].payload.map(
              element => element.disposable
            )
          },
          {
            label: "Savings",
            backgroundColor: "rgba(119, 162, 113, 1)",
            data: this.props.redux.dataReducer.chartData[2].payload.map(
              element => element.savings
            )
          }
        ]
      }
    };
  }
  render() {
    console.log(this.props.redux.dataReducer.chartData);

    return (
      <div className="chartContainer">
        <Line
          className="chartInfo"
          data={this.state.data}
          options={{
            responsive: true,
            title: {
              display: true,
              text: "Payment, Disposable and Savings",
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
