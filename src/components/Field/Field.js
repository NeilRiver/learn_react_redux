import React from "react";
import styles from "./Field.module.css";
import Card from "../Card/Card";

import { connect } from "react-redux";
import reducer from "../../store/reducer/reducer";

const Field = (props) => {
  return (
    <div className={styles.Field}>
      <Card
        title={props.title}
        subtitle={props.subtitle}
        text={props.text}
      />
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    title: state.title,
    text: state.text,
    subtitle: state.subtitle,
  };
};

export default connect(mapStateToProps)(Field);
