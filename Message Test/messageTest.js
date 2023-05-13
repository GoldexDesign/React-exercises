import React from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [message, setMessage] = React.useState("");
  const [validity, setValidity] = React.useState("Invalid");

  function handleMessageChange(event) {
    const value = event.target.value;
    setMessage(value);
    setValidity(value.trim().length >= 3 ? "Valid" : "Invalid");
  }

  return (
    <form>
      <label>Your message</label>
      <input type="text" value={message} onChange={handleMessageChange} />
      <p>{validity} message</p>
    </form>
  );
}
