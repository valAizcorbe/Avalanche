import React, { Component } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [10000, 8000, 5000, 3000]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <Line
          data={this.props.redux.dataReducer.data}
          options={{
            title: {
              display: true,
              text: "{this.props.redux.dataReducer.type}",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            },
            responsive: true
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

export default connect(mapStateToProps)(Chart);
