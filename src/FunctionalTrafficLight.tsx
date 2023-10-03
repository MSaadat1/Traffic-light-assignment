import { useState } from "react";
import { colors } from "./constants";

export const FunctionalTrafficLight = () => {
 
  const [colorIndex, setColorIndex] = useState(0);
  const currentColor = colors[colorIndex];
  const changeColor = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div
          className={`circle ${currentColor === "red" ? "red" : "black"}`}
        ></div>
        <div
          className={`circle ${currentColor === "yellow" ? "yellow" : "black"}`}
        ></div>
        <div
          className={`circle ${currentColor === "green" ? "green" : "black"}`}
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
