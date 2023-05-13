import React from "react";

// don't change the Component name "App"
export default function App() {
  const [showWarning, setShowWarning] = React.useState(false);

  const handleShowWarning = () => {
    setShowWarning(true);
  };

  const handleHideWarning = () => {
    setShowWarning(false);
  };

  return (
    <div>
      {showWarning ? (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleHideWarning}>Cancel</button>
        </div>
      ) : null}
      <button onClick={handleShowWarning}>Delete</button>
    </div>
  );
}

console.log("Zlaja");
