import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { getData } from "../../ducks/dataReducer";
import { connect } from "react-redux";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
      balance: [],
      data: {
        labels: this.props.redux.dataReducer.chartData.map(
          element => element.date
        ),
        datasets: [
          {
            label: props.redux.dataReducer.chartData.map(
              element => element.type
            ),
            backgroundColor: "rgba()",
            // data: "Lolololo"
            data: this.props.redux.dataReducer.chartData.map(
              element => element.balance
            )
          }
        ]
      }
    };
  }
  render() {
    console.log(this.props.redux.dataReducer.chartData.endingDebt);

    return (
      <div>
        <Line
          className="chartInfo"
          data={this.state.data}
          options={{
            responsive: true,
            title: {
              display: true,
              text: "chart",
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
