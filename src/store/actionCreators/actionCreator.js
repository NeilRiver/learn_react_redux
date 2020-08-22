import {
  ADD_CARD,
  SUBMIT_EDIT_CARD,
  EDIT_CARD,
  EDIT_TEXT_CARD,
  DROP,
} from "../actions/action";

export const AddCardCreater = (value) => {
  return {
    type: ADD_CARD,
  };
};

export const SubmitEditCardCreater = (value) => {
  return {
    type: SUBMIT_EDIT_CARD,
    id: value,
  };
};

export const EditCardCreater = (value) => {
  return {
    type: EDIT_CARD,
    // payload: true,
    id: value,
  };
};

export const DropCardCreater = (value) => {
  return {
    type: DROP,
    id: value,
  };
};

export const EditTextCardCreater = (id, text_title, text_subtitle, text) => {
  return {
    type: EDIT_TEXT_CARD,
    title: text_title,
    subtitle: text_subtitle,
    text: text,
    id: id,
  };
};
