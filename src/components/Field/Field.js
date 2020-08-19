import React from "react";
import styles from "./Field.module.css";
import Card from "../Card/Card";
import AddCardButton from "../AddCard/AddCard";

import {
  addCardCreater,
  submitEditCardCreater,
  editCardCreater,
  editTextCardCreater,
} from "../../store/actionCreators/actionCreator";

import { connect } from "react-redux";

const Field = (props) => {
 // console.log("props-cards", props.cards[1].newEditedValues);

  return (
    <div className={styles.Field}>
      <div className={styles.SubField}>
        {props.cards.map((value) => (
          <Card
            id={value.id}
            title={value.title}
            subtitle={value.subtitle}
            text={value.text}
            submitEdit={props.SubmitEditingCard.bind(this)}
            edit={props.editCardCreater.bind(this, value.id)}
            editText={props.editTextCardCreater.bind(this)}
            isEdit={value.isEdit}
            newEditedValues={value.newEditedValues}
          />
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
    SubmitEditingCard: () => dispatch(submitEditCardCreater()),
    editCardCreater: (id) => dispatch(editCardCreater(id)),
    editTextCardCreater: (id, text_title, text_subtitle, text)=> dispatch(editTextCardCreater(id, text_title, text_subtitle, text))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Field);
