import React from "react";
import styles from "./Field.module.css";
import Card from "../Card/Card";

const Field = () => {
  return (
    <div className={styles.Field}>
      <Card
        title="Card Title"
        text="Some quick example text to build on the card title and make up the
        bulk of the card's content."
      />
    </div>
  );
};

export default Field;
