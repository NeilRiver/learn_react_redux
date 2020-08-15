import React from "react";
import styles from "./Field.module.css";
import Card from "../Card/Card";
import AddCardButton from "../AddCard/AddCard";

import { addCardCreater } from "../../store/actionCreators/actionCreator";

import { connect } from "react-redux";
import reducer from "../../store/reducer/reducer";

const Field = (props) => {
  console.log("props-cards", props);

  return (
    <div className={styles.Field}>
      <div className={styles.SubField}>
        {props.cards.map((x) => (
          <Card id={x.id} title={x.title} subtitle={x.subtitle} text={x.text} />
        ))}
        <AddCardButton onclick={props.AddCard.bind(this)} />
      </div>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    cards: state.cards,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddCard: () => dispatch(addCardCreater()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Field);
