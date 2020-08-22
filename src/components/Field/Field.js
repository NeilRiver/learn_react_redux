import React from "react";
import styles from "./Field.module.css";
import Card from "../Card/Card";
import AddCardButton from "../AddCard/AddCard";

import {
  AddCardCreater,
  SubmitEditCardCreater,
  EditCardCreater,
  EditTextCardCreater,
  DropCardCreater,
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
            submitEdit={props.SubmitEditingCard.bind(this, value.id)}
            edit={props.EditCardCreater.bind(this, value.id)}
            editText={props.EditTextCardCreater.bind(this)}
            isEdit={value.isEdit}
            newEditedValues={value.newEditedValues}
            drop={props.DropCardCreater.bind(this, value.id)}
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
    AddCard: () => dispatch(AddCardCreater()),
    SubmitEditingCard: (id) => dispatch(SubmitEditCardCreater(id)),
    EditCardCreater: (id) => dispatch(EditCardCreater(id)),
    DropCardCreater: (id) => dispatch(DropCardCreater(id)),
    EditTextCardCreater: (id, text_title, text_subtitle, text) =>
      dispatch(EditTextCardCreater(id, text_title, text_subtitle, text)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Field);
