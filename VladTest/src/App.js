import React, { useState } from "react";
import styles from "./App.module.css"; // Import the CSS module

import specialPageImage from "./2297303988.jpg"; // Import the image for the special page

const HomePage = ({ onCodeSubmit }) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCodeSubmit(code);
  };

  return (
    <div className={styles.app}>
      <h2 className={styles.heading}>Welcome to the Website!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your unique code"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const App = () => {
  const [isCodeSubmitted, setIsCodeSubmitted] = useState(false);
  const [submittedCode, setSubmittedCode] = useState("");

  const handleCodeSubmit = (code) => {
    setIsCodeSubmitted(true);
    setSubmittedCode(code);
  };

  return (
    <div className={styles.app}>
      {isCodeSubmitted ? (
        <div className={styles.specialPage}>
          <h2 className={styles.heading}>Welcome to the Page!</h2>
          <p className={styles.code}>Your unique code is: {submittedCode}</p>
          <img
            src={specialPageImage}
            alt="Special Page"
            className={styles.image}
          />
        </div>
      ) : (
        <HomePage onCodeSubmit={handleCodeSubmit} />
      )}
    </div>
  );
};

export default App;
