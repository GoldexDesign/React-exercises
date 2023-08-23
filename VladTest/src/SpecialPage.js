import React from "react";
import styles from "./SpecialPage.module.css"; // Import the CSS module
import specialPageImage from "./2297303988.jpg"; // Import the image for the special page

const SpecialPage = () => {
  return (
    <div className={styles.container}>
      <img src={specialPageImage} alt="Special Page" className={styles.image} />
    </div>
  );
};

export default SpecialPage;
