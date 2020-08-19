import {
  ADD_CARD,
  SUBMIT_EDIT_CARD,
  EDIT_CARD,
  EDIT_TEXT_CARD,
} from "../actions/action";

export const addCardCreater = (value) => {
  return {
    type: ADD_CARD,
  };
};

export const submitEditCardCreater = (value) => {
  return {
    type: SUBMIT_EDIT_CARD,
  };
};

export const editCardCreater = (value) => {
  return {
    type: EDIT_CARD,
    payload: true,
    id: value,
  };
};

export const editTextCardCreater = (id, text_title, text_subtitle, text) => {
  return {
    type: EDIT_TEXT_CARD,
    title: text_title,
    subtitle: text_subtitle,
    text: text,
    id: id,
  };
};
