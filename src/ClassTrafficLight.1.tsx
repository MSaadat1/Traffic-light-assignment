import { Component } from "react";
import { colors } from "./constants"

export class ClassTrafficLight extends Component {
  state = {
    colorIndex: 0,
  };

  changeColor = () => {
    this.setState({
      colorIndex: (this.state.colorIndex + 1) % colors.length,
    });
  };
  render() {
    const currentColor = colors[this.state.colorIndex];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div
            className={`circle ${currentColor === "red" ? "red" : "black"}`}
          ></div>
          <div
            className={`circle ${
              currentColor === "yellow" ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${currentColor === "green" ? "green" : "black"}`}
          ></div>
        </div>
        <button
          onClick={() => {
            this.changeColor();
          }}
          className="next-state-button"
        >
          Next State
        </button>
      </div>
    );
  }
}
