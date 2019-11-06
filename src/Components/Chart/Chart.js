import React, { Component } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: []
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
              text: "chart",
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
