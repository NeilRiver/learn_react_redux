import { ADD_CARD, SUBMIT_EDIT_CARD, EDIT_CARD } from "../actions/action";

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
    id:value
  };
};
