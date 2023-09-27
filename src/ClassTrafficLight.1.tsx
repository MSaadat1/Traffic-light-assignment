import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    colors: ["red", "green", "yellow"],
    colorIndex: 0,
  };

  changeColor = () => {
    this.setState({
      colorIndex: (this.state.colorIndex + 1) % this.state.colors.length,
    });
  };
  render() {
    const currentColor = this.state.colors[this.state.colorIndex];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${currentColor}`}></div>
          <div
            className={`circle ${currentColor === "red" ? "green" : "red"}`}
          ></div>
          <div
            className={`circle ${
              currentColor === "yellow" ? "green" : "yellow"
            }`}
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
