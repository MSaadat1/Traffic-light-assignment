import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const colors = ["red", "yellow", "green"];
  const [colorIndex, setColorIndex] = useState(0);
  const currentColor = colors[colorIndex];
  const changeColor = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${currentColor}`}></div>
        <div
          className={`circle ${currentColor === "red" ? "green" : "red"}`}
        ></div>
        <div
          className={`circle ${currentColor === "yellow" ? "green" : "yellow"}`}
        ></div>
      </div>
      <button
        onClick={() => {
          changeColor();
        }}
        className="next-state-button"
      >
        Next State
      </button>
    </div>
  );
};
