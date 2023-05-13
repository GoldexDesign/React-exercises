import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = React.useState(false);

  const toggleStyle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <p className={isActive ? "active" : ""}>Style me!</p>
      <button onClick={toggleStyle}>Toggle style</button>
    </div>
  );
}

console.log("Zlaja");
